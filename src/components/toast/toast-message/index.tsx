import { useEffect } from 'react'
import { Toast } from '../toast-types'
import xCircleIcon from '@/assets/icons/x-circle.svg'
import checkCircleIcon from '@/assets/icons/check-circle.svg'
import * as S from './styles'

type ToastMessageProps = {
  toast: Toast
  onRemoveToast: (id: number) => void
}

export function ToastMessage (props: ToastMessageProps) {
  const { toast, onRemoveToast } = props

  function handleRemoveToast () {
    onRemoveToast(toast.id)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(toast.id)
    }, toast.duration || 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [toast, onRemoveToast])

  return (
    <S.Container
      type={toast.type}
      onClick={handleRemoveToast}
      role='button'
      tabIndex={0}
    >
      {toast.type === 'error' && <img src={xCircleIcon} alt='X icon' />}
      {toast.type === 'success' && <img src={checkCircleIcon} alt='Check icon' />}

      <strong>{toast.message}</strong>
    </S.Container>
  )
}
