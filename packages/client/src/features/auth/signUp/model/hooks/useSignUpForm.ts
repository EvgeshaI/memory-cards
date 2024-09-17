import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { notifications } from '@mantine/notifications';
import { fetchRegData, loadUserData } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/store';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { validationSchema } from '../constants/validationSchema';
import { FORM_DEFAULT_VALUES } from '../constants/form';
import { FormValues } from '../types/form';

export const useSignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSignUpPending, setIsSignUpPending] = useState(false);
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
    setIsSignUpPending(true);

    try {
      await fetchRegData(
        values.firstName,
        values.secondName,
        values.login,
        values.email,
        values.password,
        values.phone,
      );
      await dispatch(loadUserData());

      reset();
      navigate(routePaths[RouteNames.START_GAME]);
    } catch (error) {
      notifications.show({
        color: 'red',
        title: 'Ошибка',
        message: error instanceof Error ? error.message : 'Что-то пошло не так',
      });
    } finally {
      setIsSignUpPending(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: isSignUpPending,
  };
};
