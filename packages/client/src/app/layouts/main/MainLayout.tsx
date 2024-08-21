import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/widgets/sidebar'

export const MainLayout = () => {
  return (
    <div>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
