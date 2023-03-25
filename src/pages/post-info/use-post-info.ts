import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PostType } from '@/components/post'
import { toast } from '@/utils/toast'

type CommentType = {
  id: number
  name: string
  body: string
  email: string
}

export function usePostInfo () {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<PostType | null>(null)
  const [comments, setComments] = useState<CommentType[]>([])
  const [isCommentsLoading, setIsCommentsLoading] = useState(true)

  const commentsCount = comments.length

  useEffect(() => {
    let isMounted = true

    async function getPost () {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (!response.ok) {
          throw new Error('Post não encontrado')
        }

        const data = await response.json()
        setPost(data)
      } catch (error) {
        if (!isMounted) return

        toast({
          message: 'Post não encontrado',
          type: 'error',
        })

        history.push('/')
      }
    }

    getPost()

    return () => {
      isMounted = false
    }
  }, [id, history])

  useEffect(() => {
    async function loadComments () {
      setIsCommentsLoading(true)

      try {
        if (!post) return

        const { id } = post
        const URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`

        const response = await fetch(URL)
        const data = await response.json()

        setComments(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsCommentsLoading(false)
      }
    }

    loadComments()
  }, [post])

  return {
    comments,
    commentsCount,
    isCommentsLoading,
    post,
  }
}
