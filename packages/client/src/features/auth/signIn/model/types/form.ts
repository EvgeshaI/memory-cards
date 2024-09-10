import { InferType } from 'yup';
import { validationSchema } from '../constants/validationSchema';

export type FormValues = InferType<typeof validationSchema>;
