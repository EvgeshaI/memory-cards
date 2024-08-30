import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { NavLink } from 'react-router-dom'
import cls from './registration.module.scss'
import clsx from 'clsx'
import useForm from '../../../../entities/hooks/useForm'
import { useAppDispatch } from '@/entities/hooks/hooks'
import { register } from '../../../../services/actions/user'

export const Registration = () => {
  const dispatch = useAppDispatch()

  const initialFormValues = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',
  }

  const { values, handleChange } = useForm(initialFormValues)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUserData = {
      first_name: values.first_name,
      second_name: values.second_name,
      login: values.login,
      email: values.email,
      password: values.password,
      phone: values.phone,
    }
    dispatch(register(newUserData))
  }

  return (
    <div className={cls.regContainer}>
      <form onSubmit={e => onFormSubmit(e)}>
        <div className={cls.regContent}>
          <div className={cls.title}>Регистрация</div>
          <Input
            type="text"
            onChange={handleChange}
            value={values.first_name}
            name="first_name"
            placeholder="имя"
          />
          <Input
            onChange={handleChange}
            value={values.second_name}
            name="second_name"
            placeholder="фамилия"
          />
          <Input
            onChange={handleChange}
            value={values.login}
            name="login"
            placeholder="логин"
          />
          <Input
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="почта"
          />
          <Input
            onChange={handleChange}
            value={values.phone}
            name="phone"
            placeholder="телефон"
          />
          <Input
            onChange={handleChange}
            value={values.password}
            name="password"
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
