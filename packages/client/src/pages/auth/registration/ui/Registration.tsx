import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { useNavigate, NavLink } from 'react-router-dom'
import cls from './registration.module.scss'
import clsx from 'clsx'

export const Registration = () => {
  const nav = useNavigate()
  const reg = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    nav('/')
  }

  return (
    <div className={cls.regContainer}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={reg}>
        <div className={cls.regContent}>
          <div className={cls.title}>Регистрация</div>
          <Input placeholder="имя" />
          <Input placeholder="фамилия" />
          <Input placeholder="логин" />
          <Input placeholder="почта" />
          <Input placeholder="телефон" />
          <Input placeholder="пароль" />
        </div>
        <div className={cls.regFooter}>
          <Button className={clsx(cls.regItem, cls.btn)} type="submit">
            Зарегистрироваться
          </Button>
          <p className={cls.HaveAccount}>
            Есть аккаунт?{' '}
            <NavLink to={routePaths[RouteNames.AUTHORIZATION]}>Войти</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
