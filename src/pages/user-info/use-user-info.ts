import { useHistory, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { toast } from '@/utils/toast'

type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  phone: string
  website: string
}

export function useUserInfo () {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<UserType | null>(null)
  const [recommendedUsers, setRecommendedUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const loadRecommendedUsers = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()

      const filteredData = data.filter((user: UserType) => (
        user.id !== Number(id)),
      )

      setRecommendedUsers(filteredData)
      setHasError(false)
    } catch (error) {
      setHasError(true)
    }
  }, [id])

  function handleTryAgain () {
    loadRecommendedUsers()
  }

  useEffect(() => {
    let isMounted = true

    async function loadUser () {
      setIsLoading(true)

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
          throw new Error('Usuário não encontrado')
        }

        const data = await response.json()

        setUser(data)
        setIsLoading(false)
      } catch (error) {
        if (!isMounted) return

        toast({
          message: 'Usuário não encontrado',
          type: 'error',
        })
        history.push('/')
      }
    }

    loadUser()

    return () => {
      isMounted = false
    }
  }, [id, history])

  useEffect(() => {
    loadRecommendedUsers()
  }, [loadRecommendedUsers])

  return {
    isLoading,
    user,
    recommendedUsers,
    hasError,
    handleTryAgain,
  }
}
