import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { NavLink, useNavigate } from 'react-router-dom'
import cls from './authorization.module.scss'
import clsx from 'clsx'
import { useState } from 'react'
import { fetchLoginData } from '@/entities/user'

export const Authorization = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log('Попытка авторизации пользователя')
      const result = await fetchLoginData(login, password)
      console.log('result', result)

      if (result.status === 'Ok') {
        console.log('Пользователь авторизован')
        navigate('/main')
      } else {
        console.error('Не удалось', result.status)
        throw new Error('Не удалось')
      }
    } catch (error) {
      console.error('Ошибка при авторизации:', error)
    }
  }

  return (
    <div className={cls.authContainer}>
      <form onSubmit={e => onFormSubmit(e)}>
        <div className={cls.authContent}>
          <div className={cls.title}>Войти</div>
          <Input
            onChange={e => setLogin(e.target.value)}
            value={login}
            name="login"
            placeholder="логин"
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            value={password}
            name="password"
            placeholder="пароль "
            autoComplete="off"
          />
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
