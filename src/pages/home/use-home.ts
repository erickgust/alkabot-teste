import { PostType } from '@/components/post'
import { useCallback, useEffect, useState } from 'react'

export function useHome () {
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

  return {
    isLoading,
    hasError,
    hasPosts,
    postsCount,
    posts,
    handleTryAgain,
  }
}
