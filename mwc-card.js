import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import MDCRippleFoundation from '@material/ripple/foundation';
import { css, query, property, customElement, LitElement, findAssignedElements, html, classMap } from '@authentic/mwc-base/base-element';
import { directive, noChange, NodePart, templateFactory } from 'lit-html';
import { supportsCssVariables as supportsCssVariables$1, applyPassive } from '@material/ripple/util';
import { matches } from '@material/dom/ponyfill';

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style = css `/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}`;

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const supportsCssVariables = supportsCssVariables$1(window);
// NOTE: This is a workaround for https://bugs.webkit.org/show_bug.cgi?id=173027.
// Since keyframes on pseudo-elements (:after) are not supported in Shadow DOM,
// we put the keyframe style into the <head> element.
const isSafari = navigator.userAgent.match(/Safari/);
let didApplyRippleStyle = false;
const applyRippleStyle = () => {
    didApplyRippleStyle = true;
    const part = new NodePart({ templateFactory });
    part.appendInto(document.head);
    part.setValue(style);
    part.commit();
};
/**
 * Applied a ripple to the node specified by {surfaceNode}.
 * @param options {RippleNodeOptions}
 */
const rippleNode = (options) => {
    if (isSafari && !didApplyRippleStyle) {
        applyRippleStyle();
    }
    // TODO(sorvell): This directive requires bringing css yourself. We probably need to do this
    // because of ShadyCSS, but on Safari, the keyframes styling must be global. Perhaps this
    // directive could fix that.
    const surfaceNode = options.surfaceNode;
    const interactionNode = options.interactionNode || surfaceNode;
    // only style interaction node if not in the same root
    if (interactionNode.getRootNode() !== surfaceNode.getRootNode()) {
        if (interactionNode.style.position === '') {
            interactionNode.style.position = 'relative';
        }
    }
    const adapter = Object.assign({ browserSupportsCssVars: () => supportsCssVariables, isUnbounded: () => options.unbounded === undefined ? true : options.unbounded, isSurfaceActive: () => matches(interactionNode, ':active'), isSurfaceDisabled: () => Boolean(options.disabled), addClass: (className) => surfaceNode.classList.add(className), removeClass: (className) => surfaceNode.classList.remove(className), containsEventTarget: (target) => interactionNode.contains(target), registerInteractionHandler: (type, handler) => interactionNode.addEventListener(type, handler, applyPassive()), deregisterInteractionHandler: (type, handler) => interactionNode.removeEventListener(type, handler, applyPassive()), registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()), deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()), registerResizeHandler: (handler) => window.addEventListener('resize', handler), deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler), updateCssVariable: (varName, value) => surfaceNode.style.setProperty(varName, value), computeBoundingRect: () => surfaceNode.getBoundingClientRect(), getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }) }, options.adapter);
    const rippleFoundation = new MDCRippleFoundation(adapter);
    rippleFoundation.init();
    return rippleFoundation;
};
const rippleInteractionNodes = new WeakMap();
/**
 * A directive that applies a Material ripple to a part node. The directive
 * should be applied to a PropertyPart.
 * @param options {RippleOptions}
 */
const ripple = directive((options = {}) => (part) => {
    const surfaceNode = part.committer.element;
    const interactionNode = options.interactionNode || surfaceNode;
    let rippleFoundation = part.value;
    // if the interaction node changes, destroy and invalidate the foundation.
    const existingInteractionNode = rippleInteractionNodes.get(rippleFoundation);
    if (existingInteractionNode !== undefined && existingInteractionNode !== interactionNode) {
        rippleFoundation.destroy();
        rippleFoundation = noChange;
    }
    // make the ripple, if needed
    if (rippleFoundation === noChange) {
        rippleFoundation = rippleNode(Object.assign({}, options, { surfaceNode }));
        rippleInteractionNodes.set(rippleFoundation, interactionNode);
        part.setValue(rippleFoundation);
        // otherwise update settings as needed.
    }
    else {
        if (options.unbounded !== undefined) {
            rippleFoundation.setUnbounded(options.unbounded);
        }
        if (options.disabled !== undefined) {
            rippleFoundation.setUnbounded(options.disabled);
        }
    }
    if (options.active === true) {
        rippleFoundation.activate();
    }
    else if (options.active === false) {
        rippleFoundation.deactivate();
    }
});

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style$1 = css `/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.mdc-card {
  border-radius: 4px;
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-theme-surface, #fff);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.mdc-card--outlined {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}

.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mdc-card__media--square::before {
  margin-top: 100%;
}

.mdc-card__media--16-9::before {
  margin-top: 56.25%;
}

.mdc-card__media-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
}

.mdc-card__primary-action {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
}

.mdc-card__primary-action:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.mdc-card__primary-action:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mdc-card__actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mdc-card__actions--full-bleed {
  padding: 0;
}

.mdc-card__action-buttons,
.mdc-card__action-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}

.mdc-card__action-icons {
  color: rgba(0, 0, 0, 0.6);
  flex-grow: 1;
  justify-content: flex-end;
}

.mdc-card__action-buttons + .mdc-card__action-icons {
  /* @noflip */
  margin-left: 16px;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-card__action-buttons + .mdc-card__action-icons, .mdc-card__action-buttons + .mdc-card__action-icons[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 16px;
}

.mdc-card__action {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.mdc-card__action:focus {
  outline: none;
}

.mdc-card__action--button {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
  padding: 0 8px;
}
[dir=rtl] .mdc-card__action--button, .mdc-card__action--button[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
.mdc-card__action--button:last-child {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-card__action--button:last-child, .mdc-card__action--button:last-child[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}

.mdc-card__actions--full-bleed .mdc-card__action--button {
  justify-content: space-between;
  width: 100%;
  height: auto;
  max-height: none;
  margin: 0;
  padding: 8px 16px;
  /* @noflip */
  text-align: left;
}
[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button, .mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl] {
  /* @noflip */
  text-align: right;
}

.mdc-card__action--icon {
  margin: -6px 0;
  padding: 12px;
}

.mdc-card__action--icon:not(:disabled) {
  color: rgba(0, 0, 0, 0.6);
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden;
}
.mdc-ripple-surface--test-edge-var-bug::before {
  border: var(--mdc-ripple-surface-test-edge-var);
}

.mdc-card__primary-action {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mdc-card__primary-action::before, .mdc-card__primary-action::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-card__primary-action::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
}
.mdc-card__primary-action.mdc-ripple-upgraded::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-card__primary-action.mdc-ripple-upgraded::after {
  top: 0;
  /* @noflip */
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-card__primary-action::before, .mdc-card__primary-action::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-card__primary-action.mdc-ripple-upgraded::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-card__primary-action::before, .mdc-card__primary-action::after {
  background-color: #000;
}
.mdc-card__primary-action:hover::before {
  opacity: 0.04;
}
.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before, .mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-card__primary-action.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}

:host {
  display: inline-block;
  width: 344px;
}

.mdc-card {
  height: 100%;
}

.mdc-card__primary-action {
  flex-grow: 1;
}
.mdc-card__primary-action--empty {
  display: none;
}

.mdc-card__actions--empty {
  display: none;
}
.mdc-card__actions ::slotted(*) {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.mdc-card__actions ::slotted(*):focus {
  outline: none;
}
.mdc-card__actions ::slotted(mwc-button) {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
}
[dir=rtl] .mdc-card__actions ::slotted(mwc-button), .mdc-card__actions ::slotted(mwc-button)[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
.mdc-card__actions ::slotted(mwc-button):last-child {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-card__actions ::slotted(mwc-button):last-child, .mdc-card__actions ::slotted(mwc-button):last-child[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}
.mdc-card__actions ::slotted(mwc-icon-button) {
  margin: -6px 0;
}
.mdc-card__actions ::slotted(mwc-icon-button:not(:disabled)) {
  color: rgba(0, 0, 0, 0.6);
}`;

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// load material icons font
const fontEl = document.createElement('link');
fontEl.rel = 'stylesheet';
fontEl.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(fontEl);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Card = class Card extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Optional. Default value is false. Removes the shadow and displays a hairline outline instead.
         */
        this.outlined = false;
        /**
         * Optional. Define the aspect ratio for the main image, it can be 'square' or '16-9'
         */
        this.aspectRatio = '';
    }
    get headerEls() {
        return this.slotHeaderEl && findAssignedElements(this.slotHeaderEl, '*');
    }
    get mediaEls() {
        return this.slotMediaEl && findAssignedElements(this.slotMediaEl, '*');
    }
    get contentEls() {
        return this.slotContentEl && findAssignedElements(this.slotContentEl, '*');
    }
    get actionButtons() {
        return this.slotActionButtonsEl && findAssignedElements(this.slotActionButtonsEl, 'mwc-button');
    }
    get actionIcons() {
        return this.slotActionIconsEl && findAssignedElements(this.slotActionIconsEl, 'mwc-icon-button');
    }
    /**
     * Used to render the lit-html TemplateResult to the element's DOM
     */
    render() {
        const styles = {
            'mdc-card': true,
            'mdc-card--outlined': this.outlined
        };
        const mediaStyles = {
            'mdc-card__media': true,
            [`mdc-card__media--${this.aspectRatio}`]: this.aspectRatio !== '',
        };
        return html `
      <div class="${classMap(styles)}">
        <div class="mdc-card__primary-action" tabindex="0" .ripple="${ripple({ unbounded: false })}">
          <slot name="header"></slot>
          
          <div class="${classMap(mediaStyles)}">
            <div class="mdc-card__media-content">
              <slot name="media"></slot>
            </div>
          </div>

          <slot name="content"></slot>
        </div>

        <slot></slot>

        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <slot name="action-buttons"></slot>
          </div>

          <div class="mdc-card__action-icons">
            <slot name="action-icons"></slot>
          </div>
        </div>
      </div>
    `;
    }
    /**
     * This method is invoked whenever the card is updated
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
        super.updated(_changedProperties);
        const _hasHeaderEls = this.headerEls.length > 0;
        const _hasMediaEls = this.mediaEls.length > 0;
        const _hasContentEls = this.contentEls.length > 0;
        const _hasPrimaryAction = _hasHeaderEls || _hasMediaEls || _hasContentEls;
        const _hasActionButtons = this.actionButtons.length > 0;
        const _hasActionIcons = this.actionIcons.length > 0;
        const _hasActions = _hasActionButtons || _hasActionIcons;
        this.primaryActionEl.classList.toggle('mdc-card__primary-action--empty', !_hasPrimaryAction);
        this.actionButtonsEl.classList.toggle('mdc-card__action-buttons--empty', !_hasActionButtons);
        this.actionIconsEl.classList.toggle('mdc-card__action-icons--empty', !_hasActionIcons);
        this.actionsEl.classList.toggle('mdc-card__actions--empty', !_hasActions);
    }
};
Card.styles = style$1;
__decorate([
    query('.mdc-card__primary-action')
], Card.prototype, "primaryActionEl", void 0);
__decorate([
    query('.mdc-card__actions')
], Card.prototype, "actionsEl", void 0);
__decorate([
    query('.mdc-card__action-buttons')
], Card.prototype, "actionButtonsEl", void 0);
__decorate([
    query('.mdc-card__action-icons')
], Card.prototype, "actionIconsEl", void 0);
__decorate([
    query('slot[name="header"]')
], Card.prototype, "slotHeaderEl", void 0);
__decorate([
    query('slot[name="media"]')
], Card.prototype, "slotMediaEl", void 0);
__decorate([
    query('slot[name="content"]')
], Card.prototype, "slotContentEl", void 0);
__decorate([
    query('slot[name="action-buttons"]')
], Card.prototype, "slotActionButtonsEl", void 0);
__decorate([
    query('slot[name="action-icons"]')
], Card.prototype, "slotActionIconsEl", void 0);
__decorate([
    property({ type: Boolean })
], Card.prototype, "outlined", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "aspectRatio", void 0);
Card = __decorate([
    customElement("mwc-card")
], Card);

class Card$1 extends ScopedElementsMixin(Card) {
}
Card$1.styles = [style$1];

export { Card$1 as Card };
//# sourceMappingURL=mwc-card.js.map