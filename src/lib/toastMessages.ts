type ToastMessage = 'auth-invalid-input' | 'server-error' | 'signup-already-email' | 'signup-weak-password';

export type ToastMessageType = 'success' | 'error';

export type ToastMessageContents = {
  type: ToastMessageType,
  text: string,
};

const ToastMessages: Record<ToastMessage, ToastMessageContents> = {
  'auth-invalid-input': {
    type: 'error',
    text: '정확한 정보를 입력해주세요',
  },
  'server-error': {
    type: 'error',
    text: '다시 시도해 주세요',
  },
  'signup-already-email': {
    type: 'error',
    text: '이미 가입된 이메일 주소입니다',
  },
  'signup-weak-password': {
    type: 'error',
    text: '비밀번호를 6자리 이상으로 입력해주세요',
  },
};

export function authErrorToastMsg(errorCode: string): ToastMessageContents {
  switch (errorCode) {
    case 'auth/invalid-email':
    case 'auth/wrong-password':
    case 'user-not-found':
      return ToastMessages['auth-invalid-input'];
    case 'auth/email-already-in-use':
      return ToastMessages['signup-already-email'];
    case 'auth/weak-password':
      return ToastMessages['signup-weak-password'];
    default:
      return ToastMessages['server-error'];
  }
}
