import React from 'react';
import { Controller } from 'react-hook-form';
import { LoadingOverlay } from '@mantine/core';
import { Notification, PasswordInput, Group, Button } from '@/shared/ui';
import { useSanitizedSubmit } from '@/shared/lib';
import { useChangePasswordForm } from '../model/hooks/useChangePasswordForm';
import cls from './ChangePassword.module.scss';

interface ChangePasswordFormProps {
  userId: string;
}

export const ChangePassword: React.FC<ChangePasswordFormProps> = (props) => {
  const { userId } = props;
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    success,
    errorMessage,
  } = useChangePasswordForm({ userId });

  const handleSanitizedSubmit = useSanitizedSubmit(onSubmit);

  return (
    <div className={cls.root}>
      <LoadingOverlay visible={isLoading} />

      <form onSubmit={handleSubmit(handleSanitizedSubmit)}>
        {success && (
          <Notification withCloseButton={false} color="green" title="Успешно">
            Пароль изменен
          </Notification>
        )}
        {errorMessage && (
          <Notification withCloseButton={false} color="red" title="Ошибка">
            {errorMessage}
          </Notification>
        )}

        <Controller
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              {...field}
              mt="md"
              label="Старый пароль"
              placeholder="Введите старый пароль"
              error={errors.oldPassword?.message}
            />
          )}
        />

        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              {...field}
              mt="md"
              label="Новый пароль"
              placeholder="Введите новый пароль"
              error={errors.newPassword?.message}
            />
          )}
        />

        <Group mt="md">
          <Button type="submit">Изменить пароль</Button>
        </Group>
      </form>
    </div>
  );
};
