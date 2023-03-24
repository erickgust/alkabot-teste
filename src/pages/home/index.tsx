import { Post, PostType } from '@/components/post'
import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'

import { Loader } from '@/components/loader'
import { Title } from '@/components/title'
import { ListCount } from '@/components/list-count'
import { ErrorStatus } from '@/components/error-status'

export function Home () {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const postsCount = posts.length
  const hasPosts = postsCount > 0

  const loadPosts = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()

      setPosts(data)
      setHasError(false)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  function handleTryAgain () {
    loadPosts()
  }

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

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
    </div>
  )
}
