import { useParams } from 'react-router-dom'

export function UserInfo () {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>User Info</h1>
      <p>User ID: {id}</p>
    </div>
  )
}
