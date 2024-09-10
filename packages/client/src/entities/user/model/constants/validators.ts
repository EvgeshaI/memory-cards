import * as Yup from 'yup';

export const nameSchema = Yup.string()
  .test(
    'is-first-letter-uppercase',
    'Первая буква должна быть заглавной',
    (value) => !value || value[0] === value[0].toUpperCase(),
  )
  .matches(/^[A-Za-zА-Яа-я-]+$/, 'Допустимы только буквы и дефис')
  .required();

export const loginSchema = Yup.string()
  .min(3)
  .max(20)
  .matches(/^\S+$/, 'Без пробелов')
  .matches(/[A-Za-z]/, 'Обязательно хотя бы одна буква')
  .matches(
    /^[A-Za-z0-9-_]+$/,
    'Без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  )
  .required();

export const passwordSchema = Yup.string()
  .min(8)
  .max(40)
  .matches(
    /^(?=.*[A-ZА-Я])(?=.*\d)/,
    'Обязательно хотя бы одна заглавная буква и цифра.',
  )
  .required();

export const emailSchema = Yup.string().email().required();

export const phoneSchema = Yup.string()
  .min(10)
  .max(15)
  .matches(
    /^\+?\d{10,15}$/,
    'Телефон должен состоять из 10-15 цифр, может начинаться с плюса',
  )
  .required();
