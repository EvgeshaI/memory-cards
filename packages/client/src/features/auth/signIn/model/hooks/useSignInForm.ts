import { useState } from 'react'
import { notifications } from '@mantine/notifications'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { fetchLoginData } from '@/entities/user'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { validationSchema } from '../constants/validationSchema'
import { FORM_DEFAULT_VALUES } from '../constants/form'
import { FormValues } from '../types/form'

export const useSignInForm = () => {
  const navigate = useNavigate();
  const [isSignInPending, setIsSignInPending] = useState(false);
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
    setIsSignInPending(true);
    try {
      await fetchLoginData(values.login, values.password);
      reset();
      navigate(routePaths[RouteNames.START_GAME]);
    } catch (error) {
      notifications.show({
        color: 'red',
        title: 'Ошибка',
        message: error instanceof Error ? error.message : 'Что-то пошло не так',
      });
    } finally {
      setIsSignInPending(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: isSignInPending,
  };
};
