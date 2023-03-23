import { Post, PostType } from '@/components/post'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Loader } from '@/components/loader'
import { Title } from '@/components/title'

export function Home () {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPosts () {
      setIsLoading(true)

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        setPosts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <div>
      <Title>Página Inicial</Title>
      <Loader isLoading={isLoading} />

      <S.ListContainer>
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </S.ListContainer>
    </div>
  )
}
