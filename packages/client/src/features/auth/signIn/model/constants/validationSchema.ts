import { object } from 'yup';
import { userValidators } from '@/entities/user';

export const validationSchema = object({
  login: userValidators.loginSchema,
  password: userValidators.passwordSchema,
});
