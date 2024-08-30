import { Input, Button } from '@/shared/ui'
import { routePaths, RouteNames } from '@/shared/constants/router'
import { NavLink } from 'react-router-dom'
import { login } from '../../../../services/actions/user'
import cls from './authorization.module.scss'
import clsx from 'clsx'
import useForm from '../../../../entities/hooks/useForm'
import { useAppDispatch } from '@/entities/hooks/hooks'

export const Authorization = () => {
  const dispatch = useAppDispatch()

  const initialFormValues = {
    login: '',
    password: '',
  }

  const { values, setValues } = useForm(initialFormValues)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const registeredUserData = {
      login: values.login,
      password: values.password,
    }
    dispatch(login(registeredUserData))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <div className={cls.authContainer}>
      <form onSubmit={e => onFormSubmit(e)}>
        <div className={cls.authContent}>
          <div className={cls.title}>Войти</div>
          <Input
            onChange={handleChange}
            value={values.login}
            name="login"
            placeholder="логин"
          />
          <Input
            onChange={handleChange}
            value={values.password}
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
