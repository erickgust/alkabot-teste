import { ReactComponent as Message } from '@/assets/icons/messages.svg'
import { ReactComponent as Avatar } from '@/assets/icons/avatar.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

export type PostType = {
  id: number
  userId: number
  title: string
  body: string
}

export type PostProps = Omit<PostType, 'userId'> & {
  isComment?: boolean
  isHighlighted?: boolean
  email?: string
}

export function Post ({
  id,
  body,
  email,
  title,
  isComment,
  isHighlighted,
}: PostProps) {
  return (
    <S.Container key={id} isHighlighted={isHighlighted}>
      <strong>{title}</strong>
      <p>{body}</p>

      <S.Footer>
        <button className='user-info'>
          <Avatar aria-label="profile" title="profile" />
          {!!email && <span>{email}</span>}
          {!email && <span>Ver perfil</span>}
        </button>

        {!isComment && (
          <Link to={`post/${id}`} className='comments'>
            <Message aria-label="comments" title="comments" />
          </Link>
        )}
      </S.Footer>
    </S.Container>
  )
}
