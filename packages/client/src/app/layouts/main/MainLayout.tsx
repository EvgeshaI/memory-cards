import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/widgets/sidebar'
import cls from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <div className={cls.container}>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
