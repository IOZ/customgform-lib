import { afterEach, describe, expect, it, vi } from 'vitest';
import { getCachedScriptStatus, loadScript, renderForms, resetScriptCache } from './script';

const SRC = 'https://cdn.example.test/cgf.js';

const getScripts = () => document.querySelectorAll(`script[src="${SRC}"]`);

afterEach(() => {
  document.body.innerHTML = '';
  resetScriptCache();
  delete (window as any).CustomGForm;
});

describe('loadScript', () => {
  it('injects a single script for concurrent callers and resolves on load', async () => {
    const first = loadScript(SRC);
    const second = loadScript(SRC);
    expect(getScripts()).toHaveLength(1);

    const node = getScripts()[0] as HTMLScriptElement;
    expect(node.async).toBe(true);
    expect(node.getAttribute('data-status')).toBe('loading');

    node.dispatchEvent(new Event('load'));
    await expect(first).resolves.toBe('ready');
    await expect(second).resolves.toBe('ready');
    expect(node.getAttribute('data-status')).toBe('ready');
    expect(getCachedScriptStatus(SRC)).toBe('ready');
  });

  it('resolves with error when the script fails', async () => {
    const promise = loadScript(SRC);
    getScripts()[0].dispatchEvent(new Event('error'));
    await expect(promise).resolves.toBe('error');
  });

  it('resolves immediately from cache without injecting again', async () => {
    const promise = loadScript(SRC);
    getScripts()[0].dispatchEvent(new Event('load'));
    await promise;
    document.body.innerHTML = '';

    await expect(loadScript(SRC)).resolves.toBe('ready');
    expect(getScripts()).toHaveLength(0);
  });

  it('reuses a script that is already marked as loaded', async () => {
    const node = document.createElement('script');
    node.src = SRC;
    node.setAttribute('data-status', 'ready');
    document.body.appendChild(node);

    await expect(loadScript(SRC)).resolves.toBe('ready');
    expect(getScripts()).toHaveLength(1);
  });
});

describe('renderForms', () => {
  it('destroys and re-renders when the global is available', () => {
    const api = { destroy: vi.fn(), render: vi.fn() };
    (window as any).CustomGForm = api;
    renderForms();
    expect(api.destroy).toHaveBeenCalledOnce();
    expect(api.render).toHaveBeenCalledOnce();
    expect(api.destroy.mock.invocationCallOrder[0]).toBeLessThan(api.render.mock.invocationCallOrder[0]);
  });

  it('is a no-op when the global is missing', () => {
    expect(() => renderForms()).not.toThrow();
  });
});
