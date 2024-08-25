import { Title, Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { useNavigate, NavLink } from 'react-router-dom'

export const Registration = () => {
  const nav = useNavigate()
  const reg = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    nav('/')
  }

  return (
    <div className="reg__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={reg}>
        <Title>Регистрация в Memory Cards</Title>

        <Input placeholder="имя" />
        <Input placeholder="фамилия" />
        <Input placeholder="логин" />
        <Input placeholder="почта" />
        <Input placeholder="телефон" />
        <Input placeholder="пароль" />
        <Button type="submit">Зарегистрироваться</Button>
        <p>
          Есть аккаунт?{' '}
          <NavLink to={routePaths[RouteNames.AUTHORIZATION]}>Войти</NavLink>
        </p>
      </form>
    </div>
  )
}
