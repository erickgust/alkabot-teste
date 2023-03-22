import { Post, PostType } from '@/components/post'
import { useEffect, useState } from 'react'

import * as S from './styles'

export function Home () {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <S.Container>
      <h1>Posts</h1>
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
    </S.Container>
  )
}
