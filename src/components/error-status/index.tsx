// import { Button } from '@/ui/button'
import sad from '@/assets/icons/sad.svg'
import * as S from './styles'

type ErrorStatusProps = {
  onTryAgain: () => void
}

export function ErrorStatus ({ onTryAgain }: ErrorStatusProps) {
  return (
    <S.ErrorContainer>
      <img src={sad} alt='Rosto triste' />

      <div>
        <strong>Ocorreu um erro ao obter resultados!</strong>

        <S.Button danger onClick={onTryAgain}>Tentar novamente</S.Button>
      </div>
    </S.ErrorContainer>
  )
}
