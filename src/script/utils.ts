export function getLocalDate(time: number): string {
  return new Date(time - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

export function getLocalTime(time: number): string {
  return new Date(time - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, 8);
}
