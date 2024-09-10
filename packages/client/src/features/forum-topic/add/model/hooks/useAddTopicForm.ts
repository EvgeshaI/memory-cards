import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FORM_DEFAULT_VALUES } from '../constants/form';
import { FormValues } from '../types/form';
import { validationSchema } from '../constants/validationSchema';

interface Payload {
  onSuccess?: () => void;
}

export const useAddTopicForm = (payload: Payload) => {
  const { onSuccess } = payload;
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

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
    onSuccess?.();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
};
