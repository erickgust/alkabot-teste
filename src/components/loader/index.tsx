import { Overlay } from './styles'
import { Spinner } from '../spinner'
import { createPortal } from 'react-dom'

type LoaderProps = {
  isLoading: boolean
}

export function Loader ({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null
  }

  const container = document.querySelector('[data-js="loader-root"]')

  if (!container) {
    return null
  }

  return (
    createPortal((
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    ), container)
  )
}
