import * as Yup from 'yup';
import { validationSchema } from '../constants/validationSchema';

export type FormValues = Yup.InferType<typeof validationSchema>;
