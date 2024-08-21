import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  return <div>ProfilePage {id}</div>
}
