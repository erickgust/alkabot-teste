import { PostType } from '@/components/post'
import { useCallback, useEffect, useState } from 'react'

export function useHome () {
  const [posts, setPosts] = useState<PostType[]>([])
  const [totalPage, setTotalPage] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const postsCount = posts.length
  const hasPosts = postsCount > 0

  const loadPosts = useCallback(async (page = 1) => {
    setIsLoading(true)

    try {
      const URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`
      const response = await fetch(URL)
      const linkHeader = response.headers.get('Link') || ''
      const totalPages = linkHeader.match(/_page=(\d+)>; rel="last/)

      const data = await response.json()

      setPosts(data)

      setTotalPage(totalPages ? Number(totalPages[1]) : 1)
      setActivePage(page)

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
    totalPage,
    activePage,
    handleTryAgain,
    handlePageChange: loadPosts,
  }
}
