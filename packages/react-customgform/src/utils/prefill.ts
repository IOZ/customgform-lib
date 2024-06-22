export function prefillObjectToString(obj: { [key: string]: string | number } | null): string {
  const keyValuePairs: string[] = [];
  
  if (!obj) { return ''; }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyValuePairs.push(`${key}=${obj[key]}`);
    }
  }

  return keyValuePairs.join(';');
}