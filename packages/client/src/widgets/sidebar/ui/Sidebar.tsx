import { NavLink } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import cls from './Sidebar.module.scss'
import clsx from 'clsx'

export const Sidebar = () => {
  return (
    <aside className={cls.sidebar}>
      <nav className={cls.navbarContainer}>
        <h2 className={cls.logo}>Mnemo Cards</h2>
        <ul className={cls.navList}>
          <li>
            <NavLink
              to={routePaths[RouteNames.START_GAME]}
              className={clsx(cls.navItem, cls.btn)}>
              Играть
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.FORUM]}
              className={clsx(cls.navItem, cls.btn)}>
              Форум
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.LEADERBOARD]}
              className={clsx(cls.navItem, cls.link)}>
              Лидерборд
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.PROFILE]('5')}
              className={clsx(cls.navItem, cls.link)}>
              Ваш профиль
            </NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.AUTHORIZATION]}>
              AUTHORIZATION
            </NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.REGISTRATION]}>
              REGISTRATION
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
