import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import {
  Anchor,
  Center,
  Group,
  LoadingOverlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Button, TextInput, PasswordInput } from '@/shared/ui';
import { useSanitizedSubmit } from '@/shared/lib';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { useSignUpForm } from '../model/hooks/useSignUpForm';
import cls from './SignUpForm.module.scss';

interface Props {
  oauthSlot?: ReactNode;
}

export const RegistrationForm: FC<Props> = (props) => {
  const { oauthSlot } = props;
  const { control, handleSubmit, onSubmit, errors, isLoading } =
    useSignUpForm();

  const handleSanitizedSubmit = useSanitizedSubmit(onSubmit);

  return (
    <div className={cls.regContainer}>
      <LoadingOverlay visible={isLoading} />

      <form onSubmit={handleSubmit(handleSanitizedSubmit)}>
        <Stack gap={30}>
          <Stack gap={20}>
            <Title
              order={2}
              fz={40}
              c="var(--text-color)"
              ta="center"
              lh="100%"
              fw={400}
            >
              Регистрация
            </Title>

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

            <Button fullWidth type="submit" color="var(--accent-color)">
              Зарегистрироваться
            </Button>
          </Stack>

          <Stack align="center">
            <Stack gap={8}>
              <Center>
                <Text c="dimmed" fz={14}>
                  Зарегистрироваться через:
                </Text>
              </Center>
              <Group justify="center">{oauthSlot}</Group>
            </Stack>

            <Stack>
              <Text c="dimmed" fz={14}>
                Есть аккаунт?{' '}
                <Anchor
                  component={NavLink}
                  to={routePaths[RouteNames.AUTHORIZATION]}
                  fz={14}
                >
                  Войти
                </Anchor>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};
