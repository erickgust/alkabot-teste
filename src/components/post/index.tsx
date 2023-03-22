import * as S from './styles'
import { ReactComponent as Message } from '@/assets/icons/messages.svg'
import { ReactComponent as Avatar } from '@/assets/icons/avatar.svg'

export type PostType = {
  id: number
  userId: number
  title: string
  body: string
}

export type PostProps = Omit<PostType, 'userId'>

export function Post ({ id, title, body }: PostProps) {
  return (
    <S.Container key={id}>
      <h2>{title}</h2>
      <p>{body}</p>

      <S.Footer>
        <button>
          <Avatar aria-label="profile" title="profile" />
        </button>

        <a href='#' className='comments'>
          <Message aria-label="comments" title="comments" />
        </a>
      </S.Footer>
    </S.Container>
  )
}
