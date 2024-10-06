export const getYandexLink = (clientId: string, redirectUri: string) =>
  `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
