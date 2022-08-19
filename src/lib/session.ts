type SessionValue = object | string;

export function Store(key: string, value: SessionValue) {
  if (typeof value === 'string')
    sessionStorage.setItem(key, value);
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function Load(key: string) {
  const value = sessionStorage.getItem(key);
  if (value) return JSON.parse(value);
  return null;
}

export function Clear() {
  sessionStorage.clear();
}
