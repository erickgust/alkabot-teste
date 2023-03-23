import { ReactComponent as Message } from '@/assets/icons/messages.svg'
import { ReactComponent as Avatar } from '@/assets/icons/avatar.svg'
import * as S from './styles'

export type PostType = {
  id: number
  userId: number
  title: string
  body: string
}

export type PostProps = Omit<PostType, 'userId'> & {
  isComment?: boolean
  email?: string
}

export function Post ({ id, title, body, isComment, email }: PostProps) {
  return (
    <S.Container key={id}>
      <h2>{title}</h2>
      <p>{body}</p>

      <S.Footer>
        <button className='user-info'>
          <Avatar aria-label="profile" title="profile" />
          {!!email && <span>{email}</span>}
          {!email && <span>Ver perfil</span>}
        </button>

        {!isComment && (
          <a href='#' className='comments'>
            <Message aria-label="comments" title="comments" />
          </a>
        )}
      </S.Footer>
    </S.Container>
  )
}
