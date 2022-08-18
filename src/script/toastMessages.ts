import { ToastMessage, ToastMessageContents } from '../types/toastMessage';

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

export default ToastMessages;
