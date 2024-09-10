import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
});
