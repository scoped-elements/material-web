class FormDataEvent extends Event {
  constructor(formData) {
    super('formdata');
    this.formData = formData;
  }
}

class FormDataPolyfilled extends FormData {
  constructor(form) {
    super(form);
    this.form = form;
    form.dispatchEvent(new FormDataEvent(this));
  }

  append(name, value) {
    let input = this.form.elements[name];

    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      this.form.appendChild(input);
    }

    // if the name already exists, there is already a hidden input in the dom
    // and it will have been picked up by FormData during construction.
    // in this case, we can't just blindly append() since that will result in two entries.
    // nor can we blindly delete() the entry, since there can be multiple entries per name (e.g. checkboxes).
    // so we must carefully splice out the old value, and add back in the new value
    if (this.has(name)) {
      const entries = this.getAll(name);
      const index = entries.indexOf(input.value);

      if (index !== -1) {
        entries.splice(index, 1);
      }

      entries.push(value);
      this.set(name, entries);
    } else {
      super.append(name, value);
    }

    input.value = value;
  }
}

function supportsFormDataEvent({ document }) {
  return 'FormDataEvent' in window;
}

function polyfillFormDataEvent(win) {
  if (!win.FormData || supportsFormDataEvent(win)) {
    return;
  }

  window.FormData = FormDataPolyfilled;
  win.addEventListener('submit', e => {
    if (!e.defaultPrevented) {
      // eslint-disable-next-line no-new
      new FormData(e.target);
    }
  });
}
polyfillFormDataEvent(window);
