import { describe, expect, it } from 'vitest';
import { prefillObjectToString } from './prefill';

describe('prefillObjectToString', () => {
  it('joins key=value pairs with semicolons', () => {
    expect(prefillObjectToString({ a: 'John', b: 42 })).toBe('a=John;b=42');
  });

  it('returns an empty string for null, undefined, or empty objects', () => {
    expect(prefillObjectToString(null)).toBe('');
    expect(prefillObjectToString(undefined)).toBe('');
    expect(prefillObjectToString({})).toBe('');
  });

  it('ignores inherited properties', () => {
    const obj = Object.create({ inherited: 'x' });
    obj.own = 'y';
    expect(prefillObjectToString(obj)).toBe('own=y');
  });
});
