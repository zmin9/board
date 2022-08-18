export type ToastMessage = 'auth-invalid-input' | 'server-error' | 'signup-already-email' | 'signup-weak-password';

export type ToastMessageType = 'success' | 'error';

export type ToastMessageContents = {
  type: ToastMessageType,
  text: string,
};
