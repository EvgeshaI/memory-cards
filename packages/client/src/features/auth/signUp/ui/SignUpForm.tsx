import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { LoadingOverlay, Stack } from '@mantine/core';
import { Button, TextInput, PasswordInput } from '@/shared/ui';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { useSignUpForm } from '../model/hooks/useSignUpForm';
import cls from './SignUpForm.module.scss';

export const RegistrationForm = () => {
  const { control, handleSubmit, onSubmit, errors, isLoading } =
    useSignUpForm();

  return (
    <div className={cls.regContainer}>
      <LoadingOverlay visible={isLoading} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.regContent}>
          <div className={cls.title}>Регистрация</div>
          <Stack gap={10}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="имя"
                  error={errors.firstName?.message}
                />
              )}
            />

            <Controller
              name="secondName"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="фамилия"
                  error={errors.secondName?.message}
                />
              )}
            />

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
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="почта"
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder="телефон"
                  error={errors.phone?.message}
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
                  error={errors.password?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  placeholder="подтвердите пароль"
                  error={errors.confirmPassword?.message}
                />
              )}
            />
          </Stack>
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
