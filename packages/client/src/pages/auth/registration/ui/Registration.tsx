import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { NavLink, useNavigate } from 'react-router-dom'
import cls from './registration.module.scss'
import clsx from 'clsx'
import { fetchRegData } from '@/entities/user'
import { useState } from 'react'

export const Registration = () => {
  const navigate = useNavigate()
  const [first_name, setFirstName] = useState('')
  const [second_name, setSecondName] = useState('')
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      console.log('Попытка регистрации пользователя')
      const result = await fetchRegData(
        first_name,
        second_name,
        login,
        email,
        password,
        phone
      )
      if (result.status === 'ok') {
        console.log('Пользователь зарегестрирован')
        navigate('/main')
      } else {
        console.error('Не удалось', result.status)
        throw new Error('Не удалось ')
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error)
    }
  }

  return (
    <div className={cls.regContainer}>
      <form onSubmit={onFormSubmit}>
        <div className={cls.regContent}>
          <div className={cls.title}>Регистрация</div>
          <Input
            type="text"
            onChange={e => setFirstName(e.target.value)}
            value={first_name}
            name="first_name"
            required
            placeholder="имя"
          />
          <Input
            onChange={e => setSecondName(e.target.value)}
            value={second_name}
            name="second_name"
            required
            placeholder="фамилия"
          />
          <Input
            onChange={e => setLogin(e.target.value)}
            value={login}
            name="login"
            required
            placeholder="логин"
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            value={email}
            name="email"
            required
            placeholder="почта"
          />
          <Input
            onChange={e => setPhone(e.target.value)}
            value={phone}
            name="phone"
            required
            placeholder="телефон"
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            value={password}
            name="password"
            required
            placeholder="пароль"
          />
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
