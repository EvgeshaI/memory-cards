import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { useNavigate, NavLink } from 'react-router-dom'
import cls from './authorization.module.scss'
import clsx from 'clsx'

export const Authorization = () => {
  const nav = useNavigate()
  const auth = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    nav('/')
  }

  return (
    <div className={cls.authContainer}>
      <form className={cls.authBody} onSubmit={auth}>
        <div className={cls.authContent}>
          <div className={cls.title}>Войти</div>
          <Input placeholder="логин" />
          <Input placeholder="пароль " />
        </div>
        <div className={cls.authFooter}>
          <Button className={clsx(cls.authItem, cls.btn)} type="submit">
            Войти
          </Button>
          <p className={cls.NoAccount}>
            Нет аккаунта?{' '}
            <NavLink to={routePaths[RouteNames.REGISTRATION]}>
              Зарегистрироваться
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
