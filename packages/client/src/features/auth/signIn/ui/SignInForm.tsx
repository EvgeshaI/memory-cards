import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { LoadingOverlay, Stack } from '@mantine/core';
import { TextInput, PasswordInput, Button } from '@/shared/ui';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { useSignInForm } from '../model/hooks/useSignInForm';
import cls from './SignInForm.module.scss';

export const AuthorizationForm = () => {
  const { control, handleSubmit, onSubmit, errors, isLoading } =
    useSignInForm();

  return (
    <div className={cls.authContainer}>
      <LoadingOverlay visible={isLoading} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.authContent}>
          <div className={cls.title}>Войти</div>
          <Stack gap={10}>
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="логин"
                  error={errors.login?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  placeholder="пароль"
                  autoComplete="off"
                  error={errors.password?.message}
                />
              )}
            />
          </Stack>
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
  );
};
