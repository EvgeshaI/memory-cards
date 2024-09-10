import * as Yup from 'yup';
import { userValidators } from '@/entities/user';

export const validationSchema = Yup.object({
  firstName: userValidators.nameSchema,
  secondName: userValidators.nameSchema,
  login: userValidators.loginSchema,
  email: userValidators.emailSchema,
  phone: userValidators.phoneSchema,
  password: userValidators.passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required(),
});
