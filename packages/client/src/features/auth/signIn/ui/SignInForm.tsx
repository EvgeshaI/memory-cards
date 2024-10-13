import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import {
  Center,
  Title,
  Group,
  LoadingOverlay,
  Stack,
  Text,
  Anchor,
} from '@mantine/core';
import { TextInput, PasswordInput, Button } from '@/shared/ui';
import { routePaths, RouteNames } from '@/shared/constants/router';
import { useSignInForm } from '../model/hooks/useSignInForm';
import cls from './SignInForm.module.scss';

interface Props {
  oauthSlot?: ReactNode;
}

export const AuthorizationForm: FC<Props> = (props) => {
  const { oauthSlot } = props;
  const { control, handleSubmit, onSubmit, errors, isLoading } =
    useSignInForm();

  return (
    <div className={cls.authContainer}>
      <LoadingOverlay visible={isLoading} />

      <form onSubmit={handleSubmit(onSubmit)}>
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
              Войти
            </Title>

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

            <Button fullWidth type="submit" color="var(--accent-color)">
              Войти
            </Button>
          </Stack>

          <Stack align="center">
            <Stack gap={8}>
              <Center>
                <Text c="dimmed" fz={14}>
                  Войти через:
                </Text>
              </Center>
              <Group justify="center">{oauthSlot}</Group>
            </Stack>

            <Stack>
              <Text c="dimmed" fz={14}>
                Нет аккаунта?{' '}
                <Anchor
                  component={NavLink}
                  to={routePaths[RouteNames.REGISTRATION]}
                  fz={14}
                >
                  Зарегистрироваться
                </Anchor>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};
