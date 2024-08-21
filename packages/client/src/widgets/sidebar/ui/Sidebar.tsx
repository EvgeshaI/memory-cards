import { NavLink } from 'react-router-dom'
import { routePaths, RouteNames } from '@/shared/constants/router'

export const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to={routePaths[RouteNames.MAIN]}>MAIN</NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.PROFILE]('5')}>PROFILE</NavLink>
          </li>
          <li>
            <NavLink to={routePaths[RouteNames.FORBIDDEN]}>FORBIDDEN</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
