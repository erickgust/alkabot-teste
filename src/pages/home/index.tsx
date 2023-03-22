import { Post, PostType } from '@/components/post'
import { useEffect, useState } from 'react'

export function Home () {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  )
}
