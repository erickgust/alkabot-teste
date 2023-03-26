import NotFoundIcon from '@/assets/not-found.svg'
import * as S from './styles'

export function NotFound () {
  return (
    <S.Container>
      <img src={NotFoundIcon} alt="Página não encontrada" />
      <h1>Página não encontrada</h1>
    </S.Container>
  )
}
