import { DEFAULT_DISPLAY_MODE, FORM_ID_ATTRIBUTE } from './constants.js';
import { prefillObjectToString } from './prefill.js';
import type { CustomGFormOptions } from './types.js';

/** Builds the `data-*` attributes consumed by the cgf.js embed script. */
export function buildDataAttributes(options: CustomGFormOptions): Record<string, string> {
  const {
    formId,
    mode = DEFAULT_DISPLAY_MODE,
    label = '',
    inlineStyles = '',
    buttonClassName = '',
    prefillFields = null,
    hiddenFields = null,
    theme,
    __formConfig = null,
    __envs,
  } = options;

  const attrs: Record<string, string> = { [FORM_ID_ATTRIBUTE]: formId };

  if (mode === 'popup') {
    attrs['data-mode'] = mode;
    attrs['data-label'] = label;
    attrs['data-style'] = inlineStyles;
    attrs['data-button_class'] = buttonClassName;
  }

  if (__formConfig) {
    try {
      attrs['data-customgform-config'] = JSON.stringify(__formConfig);
    } catch {}
  }

  if (prefillFields) {
    attrs['data-prefill_fields'] = prefillObjectToString(prefillFields);
  }

  if (hiddenFields) {
    attrs['data-hidden_fields'] = hiddenFields.join(';');
  }

  if (__envs) {
    attrs['data-envs'] = JSON.stringify(__envs);
  }

  if (theme) {
    attrs['data-theme'] = theme;
  }

  return attrs;
}
