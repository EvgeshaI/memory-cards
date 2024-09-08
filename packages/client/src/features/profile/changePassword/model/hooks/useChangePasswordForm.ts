import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePassword } from '@/entities/user';
import { validationSchema } from '../constants/validationSchema';
import { FORM_DEFAULT_VALUES } from '../constants/form';
import { FormValues } from '../types/form';

interface Payload {
  userId: string;
}

export const useChangePasswordForm = (payload: Payload) => {
  const { userId } = payload;
  const [isChangePasswordPending, setIsChangePasswordPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setIsChangePasswordPending(true);

    try {
      await changePassword(userId, values.oldPassword, values.newPassword);
      reset();
      setSuccess(true);
      setErrorMessage(undefined);
    } catch (err) {
      setSuccess(false);
      setErrorMessage('Не удалось изменить пароль.');
    } finally {
      setIsChangePasswordPending(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    success,
    errorMessage,
    isLoading: isChangePasswordPending,
  };
};
