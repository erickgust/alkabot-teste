import { Link } from 'react-router-dom'
import { Title } from '../title'
import * as S from './styles'

export function Header () {
  return (
    <S.Header>
      <Link to="/">
        <Title>My<span>Posts</span></Title>
      </Link>
    </S.Header>
  )
}
