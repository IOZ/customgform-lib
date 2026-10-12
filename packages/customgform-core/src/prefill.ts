import type { PrefillFields } from './types.js';

export function prefillObjectToString(obj: PrefillFields | null | undefined): string {
  if (!obj) { return ''; }

  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join(';');
}
