import { useEffect, useState } from 'react'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export function Home () {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
