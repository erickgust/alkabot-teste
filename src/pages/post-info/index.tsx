import { Post, PostType } from '@/components/post'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'

type CommentType = {
  id: number
  name: string
  body: string
  email: string
}

export function PostInfo () {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<PostType | null>(null)
  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    async function getPost () {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error(error)
      }
    }

    getPost()
  }, [id])

  useEffect(() => {
    async function loadComments () {
      try {
        if (!post) return

        const { id } = post
        const URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`

        const response = await fetch(URL)
        const data = await response.json()

        setComments(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadComments()
  }, [post])

  return (
    <div>
      {post && (
        <Post
          id={post.id}
          title={post.title}
          body={post.body}
          isComment
          isHighlighted
        />
      )}

      <section>
        <h2>Comments</h2>

        <S.ListContainer>
          {comments.map((comment) => (
            <Post
              key={comment.id}
              id={comment.id}
              title={comment.name}
              body={comment.body}
              email={comment.email}
              isComment
            />
          ))}
        </S.ListContainer>
      </section>
    </div>
  )
}
