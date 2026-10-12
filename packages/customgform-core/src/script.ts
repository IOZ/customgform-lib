import { SCRIPT_STATUS_ATTRIBUTE } from './constants.js';
import type { ScriptStatus } from './types.js';

export type LoadedScriptStatus = Extract<ScriptStatus, 'ready' | 'error'>;

const cachedScriptStatuses: Record<string, LoadedScriptStatus | undefined> = {};

export function getCachedScriptStatus(src: string): LoadedScriptStatus | undefined {
  return cachedScriptStatuses[src];
}

/** Test helper: forget cached statuses. */
export function resetScriptCache(): void {
  for (const key of Object.keys(cachedScriptStatuses)) {
    delete cachedScriptStatuses[key];
  }
}

/**
 * Injects (once) a script tag for `src` and resolves when it loads or fails.
 * Multiple callers share the same `<script>` element.
 */
export function loadScript(src: string): Promise<LoadedScriptStatus> {
  const cached = cachedScriptStatuses[src];
  if (cached) {
    return Promise.resolve(cached);
  }

  if (typeof document === 'undefined') {
    return Promise.resolve('error');
  }

  let node = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  const existingStatus = node?.getAttribute(SCRIPT_STATUS_ATTRIBUTE);
  if (existingStatus === 'ready' || existingStatus === 'error') {
    cachedScriptStatuses[src] = existingStatus;
    return Promise.resolve(existingStatus);
  }

  const isNew = !node;
  if (!node) {
    node = document.createElement('script');
    node.src = src;
    node.async = true;
    node.setAttribute(SCRIPT_STATUS_ATTRIBUTE, 'loading');
  }

  const scriptNode = node;
  const promise = new Promise<LoadedScriptStatus>((resolve) => {
    const onEvent = (event: Event) => {
      const status: LoadedScriptStatus = event.type === 'load' ? 'ready' : 'error';
      scriptNode.setAttribute(SCRIPT_STATUS_ATTRIBUTE, status);
      cachedScriptStatuses[src] = status;
      scriptNode.removeEventListener('load', onEvent);
      scriptNode.removeEventListener('error', onEvent);
      resolve(status);
    };
    scriptNode.addEventListener('load', onEvent);
    scriptNode.addEventListener('error', onEvent);
  });

  // Listeners are attached before insertion so synchronous load/error events are not missed.
  if (isNew) {
    document.body.appendChild(scriptNode);
  }

  return promise;
}

/** Re-renders every embedded form once the cgf.js global is available. */
export function renderForms(): void {
  if (typeof window !== 'undefined' && typeof window.CustomGForm !== 'undefined') {
    window.CustomGForm.destroy();
    window.CustomGForm.render();
  }
}
