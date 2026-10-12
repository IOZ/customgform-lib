import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createApp, defineComponent, h, nextTick, resolveComponent } from 'vue';
import { mount } from '@vue/test-utils';
import { CDN_LIB, resetScriptCache } from '@customgform-lib/customgform-core';
import CustomGForm, { CustomGFormPlugin } from './index';

const FORM_ID = 'clj5flan90005wnju2yq4k38b';
const flush = () => new Promise((resolve) => setTimeout(resolve, 0));
const getScript = (src = CDN_LIB) =>
  document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

let api: { destroy: ReturnType<typeof vi.fn>; render: ReturnType<typeof vi.fn> };

beforeEach(() => {
  api = { destroy: vi.fn(), render: vi.fn() };
});

afterEach(() => {
  document.body.innerHTML = '';
  resetScriptCache();
  delete (window as any).CustomGForm;
});

describe('CustomGForm (vue)', () => {
  it('renders a standard embed container', () => {
    const wrapper = mount(CustomGForm, { props: { formId: FORM_ID } });
    const el = wrapper.element as HTMLElement;
    expect(el.tagName).toBe('DIV');
    expect(el.getAttribute('data-customgform')).toBe(FORM_ID);
    expect(el.hasAttribute('data-mode')).toBe(false);
    wrapper.unmount();
  });

  it('renders popup, prefill, hidden fields and theme attributes', () => {
    const wrapper = mount(CustomGForm, {
      props: {
        formId: FORM_ID,
        mode: 'popup',
        label: 'Show form',
        inlineStyles: 'color: red;',
        buttonClassName: 'btn',
        prefillFields: { '1': 'John', '2': 7 },
        hiddenFields: ['1'],
        theme: 'dark',
        __envs: { apiHost: 'https://api.test' },
      },
    });
    expect(wrapper.attributes()).toMatchObject({
      'data-customgform': FORM_ID,
      'data-mode': 'popup',
      'data-label': 'Show form',
      'data-style': 'color: red;',
      'data-button_class': 'btn',
      'data-prefill_fields': '1=John;2=7',
      'data-hidden_fields': '1',
      'data-theme': 'dark',
      'data-envs': '{"apiHost":"https://api.test"}',
    });
    wrapper.unmount();
  });

  it('passes through extra attributes like class and id', () => {
    const wrapper = mount(CustomGForm, {
      props: { formId: FORM_ID },
      attrs: { class: 'my-form', id: 'form-1' },
    });
    expect(wrapper.classes()).toContain('my-form');
    expect(wrapper.attributes('id')).toBe('form-1');
    wrapper.unmount();
  });

  it('injects the CDN script once and renders forms after it loads', async () => {
    const a = mount(CustomGForm, { props: { formId: FORM_ID } });
    const b = mount(CustomGForm, { props: { formId: 'other' } });
    expect(document.querySelectorAll(`script[src="${CDN_LIB}"]`)).toHaveLength(1);

    (window as any).CustomGForm = api;
    getScript()!.dispatchEvent(new Event('load'));
    await flush();
    await nextTick();

    expect(api.render).toHaveBeenCalled();
    expect(api.destroy).toHaveBeenCalled();
    a.unmount();
    b.unmount();
  });

  it('uses a custom CDN url when __cdnUrl is provided', () => {
    const url = 'https://cdn.example.test/cgf.js';
    const wrapper = mount(CustomGForm, { props: { formId: FORM_ID, __cdnUrl: url } });
    expect(getScript(url)).not.toBeNull();
    expect(getScript()).toBeNull();
    wrapper.unmount();
  });

  it('re-renders immediately when the script is already loaded', async () => {
    const first = mount(CustomGForm, { props: { formId: FORM_ID } });
    getScript()!.dispatchEvent(new Event('load'));
    await flush();
    first.unmount();

    (window as any).CustomGForm = api;
    const second = mount(CustomGForm, { props: { formId: FORM_ID } });
    expect(api.render).toHaveBeenCalledOnce();
    second.unmount();
  });

  it('re-renders forms when props change', async () => {
    (window as any).CustomGForm = api;
    const wrapper = mount(CustomGForm, { props: { formId: FORM_ID } });
    api.render.mockClear();

    await wrapper.setProps({ theme: 'light' });
    expect(wrapper.attributes('data-theme')).toBe('light');
    expect(api.render).toHaveBeenCalledOnce();
    wrapper.unmount();
  });

  it('does not throw when the script fails to load', async () => {
    const wrapper = mount(CustomGForm, { props: { formId: FORM_ID } });
    getScript()!.dispatchEvent(new Event('error'));
    await flush();
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
});

describe('CustomGFormPlugin', () => {
  it('registers the component globally', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    const app = createApp(defineComponent({ render: () => h(resolveComponent('CustomGForm'), { formId: FORM_ID }) }));
    app.use(CustomGFormPlugin);
    expect(app.component('CustomGForm')).toBe(CustomGForm);
    app.mount(root);
    expect(root.querySelector('[data-customgform]')?.getAttribute('data-customgform')).toBe(FORM_ID);
    app.unmount();
  });
});
