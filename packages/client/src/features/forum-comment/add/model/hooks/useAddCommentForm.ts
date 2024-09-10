import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../constants/validationSchema';
import { FORM_DEFAULT_VALUES } from '../constants/form';
import { FormValues } from '../types/form';

interface Payload {
  onSuccess?: () => void;
}

export const useAddCommentForm = (payload: Payload) => {
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
