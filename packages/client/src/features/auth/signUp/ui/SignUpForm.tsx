import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import { Input, Button } from '@/shared/ui';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { fetchRegData } from '@/entities/user';
import cls from './registration.module.scss';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [second_name, setSecondName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetchRegData(
        first_name,
        second_name,
        login,
        email,
        password,
        phone,
      );
      if (result.status === 'ok') {
        navigate('/main');
      } else {
        console.error('Не удалось', result.status);
        throw new Error('Не удалось ');
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <div className={cls.regContainer}>
      <form onSubmit={onFormSubmit}>
        <div className={cls.regContent}>
          <div className={cls.title}>Регистрация</div>
          <Input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            value={first_name}
            name="first_name"
            required
            placeholder="имя"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSecondName(e.target.value)
            }
            value={second_name}
            name="second_name"
            required
            placeholder="фамилия"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin(e.target.value)
            }
            value={login}
            name="login"
            required
            placeholder="логин"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            name="email"
            required
            placeholder="почта"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            value={phone}
            name="phone"
            required
            placeholder="телефон"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
            name="password"
            required
            placeholder="пароль"
            autoComplete="off"
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
  );
};
