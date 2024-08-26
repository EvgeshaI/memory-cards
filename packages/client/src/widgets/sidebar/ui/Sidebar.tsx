import { NavLink } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import cls from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={cls.sidebar}>
      <nav className={cls.navbarContainer}>
        <h2 className={cls.logo}>Mnemo Cards</h2>
        <ul className={cls.navList}>
          <li>
            <NavLink to={routePaths[RouteNames.START_GAME]} className={`${cls.navItem} ${cls.btn}`}>
              Играть
            </NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.FORUM]} className={`${cls.navItem} ${cls.btn}`}>
              Форум
            </NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.LEADERBOARD]} className={`${cls.navItem} ${cls.link}`}>
              Лидерборд
            </NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.PROFILE]('5')} className={`${cls.navItem} ${cls.link}`}>
              Ваш профиль
            </NavLink>
          </li>
          {/*<li>*/}
          {/*  <NavLink to={routePaths[RouteNames.MAIN]} className={cls.navItem}>MAIN</NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink to={routePaths[RouteNames.PROFILE]('5')}>PROFILE</NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink to={routePaths[RouteNames.FORBIDDEN]}>FORBIDDEN</NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </aside>
  )
}
