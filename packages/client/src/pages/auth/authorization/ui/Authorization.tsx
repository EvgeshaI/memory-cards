import { Title, Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { useNavigate, NavLink } from 'react-router-dom'
import cls from './authorization.module.scss'

export const Authorization = () => {
  const nav = useNavigate()
  const auth = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    nav('/')
  }

  return (
    <div className={cls.auth_container}>
      <form
        className={cls.auth_body}
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={auth}>
        <Title>Войти в Memory Cards</Title>
        <Input placeholder="логин" />
        <Input placeholder="пароль " />
        <Button type="submit">Войти</Button>
        <p>
          Нет аккаунта?{' '}
          <NavLink to={routePaths[RouteNames.REGISTRATION]}>
            Зарегистрироваться
          </NavLink>
        </p>
      </form>
    </div>
  )
}
