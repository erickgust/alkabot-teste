import { Post } from '@/components/post'
import * as S from './styles'

import { Loader } from '@/components/loader'
import { Title } from '@/components/title'
import { ListCount } from '@/components/list-count'
import { ErrorStatus } from '@/components/error-status'
import { useHome } from './use-home'
import { Pagination } from '@/components/pagination'

export function Home () {
  const {
    isLoading,
    hasError,
    hasPosts,
    postsCount,
    posts,
    activePage,
    totalPage,
    handleTryAgain,
    handlePageChange,
  } = useHome()

  return (
    <div>
      <S.Header>
        <Title>Página Inicial</Title>

        {!isLoading && hasPosts && (
          <ListCount>{postsCount} postagens</ListCount>
        )}
      </S.Header>

      <Loader isLoading={isLoading} />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {!hasError && (
        <S.ListContainer>
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </S.ListContainer>
      )}

      {!hasError && !isLoading && (
        <Pagination
          activePage={activePage}
          total={totalPage}
          onClick={handlePageChange}
        />
      )}
    </div>
  )
}
