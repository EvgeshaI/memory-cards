import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './Sidebar.module.scss';

const getNavLinkClass = (isActive: boolean) =>
  clsx(cls.navItem, { [cls.active]: isActive });

export const Sidebar = () => (
  <aside className={cls.sidebar}>
    <nav className={cls.navbarContainer}>
      <h2 className={cls.logo}>Mnemo Cards</h2>
      <ul className={cls.navList}>
        <li>
          <NavLink
            to={routePaths[RouteNames.START_GAME]}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Играть
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routePaths[RouteNames.FORUM]}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Форум
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routePaths[RouteNames.LEADERBOARD]}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Лидерборд
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routePaths[RouteNames.PROFILE]('5')}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Ваш профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routePaths[RouteNames.AUTHORIZATION]}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            AUTHORIZATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routePaths[RouteNames.REGISTRATION]}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            REGISTRATION
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);
