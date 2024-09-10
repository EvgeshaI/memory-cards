import * as Yup from 'yup';

export const locale: Yup.LocaleObject = {
  mixed: {
    required: 'Обязательное поле',
  },
  string: {
    email: 'Неверный email',
    min: ({ min }) => `Минимальная длина ${min} символов`,
    max: ({ max }) => `Максимальная длина ${max} символов`,
    length: ({ length }) => `'Должно содержать ${length} символов`,
  },
};

Yup.setLocale(locale);
