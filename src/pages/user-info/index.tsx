import { Link } from 'react-router-dom'
import { Title } from '@/components/title'
import { Loader } from '@/components/loader'
import { ErrorStatus } from '@/components/error-status'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { useUserInfo } from './use-user-info'
import * as S from './styles'

export function UserInfo () {
  const {
    isLoading,
    user,
    recommendedUsers,
    hasError,
    handleTryAgain,
  } = useUserInfo()

  return (
    <div>
      <Loader isLoading={isLoading} />

      {user && (
        <S.Container>
          <header>
            <h1>Olá, {user.name} 👋</h1>
          </header>

          <S.Section>
            <div>
              <h2>Informações</h2>

              <S.ListContainer>
                <li>Nome: <span>{user.name}</span></li>
                <li>Usuário: <span>{user.username}</span></li>
                <li>Email: <span>{user.email}</span></li>
                <li>Telefone: <span>{user.phone}</span></li>
                <li>Website: <span>{user.website}</span></li>
              </S.ListContainer>
            </div>

            <div>
              <h2>Endereço</h2>

              <S.ListContainer>
                <li>Rua: <span>{user.address.street}</span></li>
                <li>Complemento: <span>{user.address.suite}</span></li>
                <li>Cidade: <span>{user.address.city}</span></li>
                <li>CEP: <span>{user.address.zipcode}</span></li>
              </S.ListContainer>
            </div>
          </S.Section>
        </S.Container>
      )}

      <S.Footer>
        <Title>Recomendados</Title>

        {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

        {!hasError && (
          <S.UserList>
            {recommendedUsers.map(user => (
              <S.Container
                key={user.id}
                as={Link}
                to={`/user/${user.id}`}
                className="user-info"
              >
                  <UserIcon aria-label="user" title="user" />
                  <strong>{user?.name}</strong>
                  <span>{user?.email}</span>
                  <span>{user?.website}</span>
              </S.Container>
            ))}
          </S.UserList>
        )}
      </S.Footer>
    </div>
  )
}
