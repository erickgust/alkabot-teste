import * as S from './styles'

type SpinnerProps = {
  size?: number
}

export function Spinner ({ size = 32 }: SpinnerProps) {
  return (
    <S.Spinner size={size} />
  )
}
