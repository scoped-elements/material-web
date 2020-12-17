import { _ as __decorate } from './tslib.es6-2abbead4.js';
import { query, property, html } from 'lit-element';
import './base-element-66082abe.js';
import './foundation-9806e19c.js';
import './mwc-ripple-css-243508a9.js';
import { c as classMap } from './class-map-964cfe32.js';
import './style-map-dbb87bda.js';
import './mwc-ripple-e40013be.js';
import './ripple-handlers-a617bd83.js';
import { Scoped } from 'scoped-elements';
import './mwc-ripple.js';
import '@material/mwc-checkbox';
import './observer-c2e992b9.js';
import { L as ListItemBase, s as style } from './mwc-list-item-css-1f34efcb.js';
import { s as style$1 } from './mwc-control-list-item-css-b817c11e.js';
import './form-element-947b0ff3.js';
import './if-defined-3b25f6b6.js';
import { Checkbox } from './mwc-checkbox.js';

/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

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
class CheckListItemBase extends ListItemBase {
    constructor() {
        super(...arguments);
        this.left = false;
        this.graphic = 'control';
    }
    render() {
        const checkboxClasses = {
            'mdc-list-item__graphic': this.left,
            'mdc-list-item__meta': !this.left,
        };
        const text = this.renderText();
        const graphic = this.graphic && this.graphic !== 'control' && !this.left ?
            this.renderGraphic() :
            html ``;
        const meta = this.hasMeta && this.left ? this.renderMeta() : html ``;
        const ripple = this.renderRipple();
        return html `
      ${ripple}
      ${graphic}
      ${this.left ? '' : text}
      <span class=${classMap(checkboxClasses)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? text : ''}
      ${meta}`;
    }
    async onChange(evt) {
        const checkbox = evt.target;
        const changeFromProp = this.selected === checkbox.checked;
        if (!changeFromProp) {
            this._skipPropRequest = true;
            this.selected = checkbox.checked;
            await this.updateComplete;
            this._skipPropRequest = false;
        }
    }
}
__decorate([
    query('slot')
], CheckListItemBase.prototype, "slotElement", void 0);
__decorate([
    query('mwc-checkbox')
], CheckListItemBase.prototype, "checkboxElement", void 0);
__decorate([
    property({ type: Boolean })
], CheckListItemBase.prototype, "left", void 0);
__decorate([
    property({ type: String, reflect: true })
], CheckListItemBase.prototype, "graphic", void 0);

class CheckListItem extends Scoped(CheckListItemBase) {
    static get scopedElements() {
        return {
            'mwc-checkbox': Checkbox,
        };
    }
}
CheckListItem.styles = [style, style$1];

export { CheckListItem };
//# sourceMappingURL=mwc-check-list-item.js.map
