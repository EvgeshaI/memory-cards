import * as Yup from 'yup';
import { userValidators } from '@/entities/user';

export const validationSchema = Yup.object({
  oldPassword: Yup.string().required(),
  newPassword: userValidators.passwordSchema,
});
