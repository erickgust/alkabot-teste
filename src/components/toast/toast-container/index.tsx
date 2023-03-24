import { ToastMessage } from '../toast-message'
import { useToastContainer } from './use-toast-container'
import * as S from './styles'

export function ToastContainer () {
  const { toasts, handleRemoveToast } = useToastContainer()

  return (
    <S.Container>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          toast={toast}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </S.Container>
  )
}
