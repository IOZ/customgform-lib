import { afterEach, describe, expect, it, vi } from 'vitest';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { CDN_LIB, resetScriptCache } from '@customgform-lib/customgform-core';
import CustomGForm from './CustomGForm';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

const FORM_ID = 'clj5flan90005wnju2yq4k38b';

const render = (element: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(element));
  return { container, unmount: () => act(() => root.unmount()) };
};

afterEach(() => {
  document.body.innerHTML = '';
  resetScriptCache();
  delete (window as any).CustomGForm;
});

describe('CustomGForm (react)', () => {
  it('renders data attributes from shared core', () => {
    const { container, unmount } = render(
      <CustomGForm
        formId={FORM_ID}
        mode="popup"
        label="Show form"
        buttonClassName="btn"
        prefillFields={{ '1': 'John' }}
        hiddenFields={['1']}
        theme="auto"
      />,
    );
    const el = container.firstElementChild!;
    expect(el.getAttribute('data-customgform')).toBe(FORM_ID);
    expect(el.getAttribute('data-mode')).toBe('popup');
    expect(el.getAttribute('data-label')).toBe('Show form');
    expect(el.getAttribute('data-button_class')).toBe('btn');
    expect(el.getAttribute('data-prefill_fields')).toBe('1=John');
    expect(el.getAttribute('data-hidden_fields')).toBe('1');
    expect(el.getAttribute('data-theme')).toBe('auto');
    unmount();
  });

  it('loads the CDN script once and renders forms after load', async () => {
    const api = { destroy: vi.fn(), render: vi.fn() };
    const { unmount } = render(
      <>
        <CustomGForm formId={FORM_ID} />
        <CustomGForm formId="other" />
      </>,
    );
    const scripts = document.querySelectorAll(`script[src="${CDN_LIB}"]`);
    expect(scripts).toHaveLength(1);

    (window as any).CustomGForm = api;
    await act(async () => {
      scripts[0].dispatchEvent(new Event('load'));
    });
    expect(api.destroy).toHaveBeenCalled();
    expect(api.render).toHaveBeenCalled();
    unmount();
  });
});
