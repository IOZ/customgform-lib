import { describe, expect, it } from 'vitest';
import { buildDataAttributes } from './attributes';

describe('buildDataAttributes', () => {
  it('only sets the form id in standard mode by default', () => {
    expect(buildDataAttributes({ formId: 'abc' })).toEqual({ 'data-customgform': 'abc' });
  });

  it('adds popup attributes with defaults in popup mode', () => {
    expect(buildDataAttributes({ formId: 'abc', mode: 'popup' })).toEqual({
      'data-customgform': 'abc',
      'data-mode': 'popup',
      'data-label': '',
      'data-style': '',
      'data-button_class': '',
    });
  });

  it('ignores popup-only options in standard mode', () => {
    const attrs = buildDataAttributes({ formId: 'abc', label: 'Open', buttonClassName: 'btn' });
    expect(attrs).not.toHaveProperty('data-label');
    expect(attrs).not.toHaveProperty('data-button_class');
  });

  it('serializes prefill, hidden fields, theme, envs and form config', () => {
    const attrs = buildDataAttributes({
      formId: 'abc',
      prefillFields: { '1': 'John', '2': 3 },
      hiddenFields: ['1', '2'],
      theme: 'dark',
      __envs: { apiHost: 'https://api.test' },
      __formConfig: { title: 'T' },
    });
    expect(attrs).toMatchObject({
      'data-prefill_fields': '1=John;2=3',
      'data-hidden_fields': '1;2',
      'data-theme': 'dark',
      'data-envs': '{"apiHost":"https://api.test"}',
      'data-customgform-config': '{"title":"T"}',
    });
  });

  it('skips a form config that cannot be serialized', () => {
    const config: Record<string, unknown> = {};
    config.self = config;
    expect(buildDataAttributes({ formId: 'abc', __formConfig: config })).not.toHaveProperty(
      'data-customgform-config',
    );
  });
});
