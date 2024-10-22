export const SERVER_API_URL = __SERVER_API_URL__;
export const YANDEX_API_URL = __YANDEX_API_URL__;
export const YANDEX_RESOURCES_URL = __YANDEX_RESOURCES_URL__;
export const SERVER_HOST =
  typeof window === 'undefined'
    ? __INTERNAL_SERVER_URL__
    : __EXTERNAL_SERVER_URL__;
