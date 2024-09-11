import { NavLink } from 'react-router-dom';
import { Box, SimpleGrid, Space, Text } from '@mantine/core';
import { Title } from '@/shared/ui';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { useUserData } from '@/entities/user';
import { EmojiCard } from '@/shared/ui/emoji-card';
import cls from './MainPage.module.scss';

const emoji = ['🎉', '😈', '🧠', '😈', '🎉', '🧠'];

export const MainPage = () => {
  const { user } = useUserData();

  return (
    <div className={cls.root}>
      <Title fz="100" c="var(--accent-color)" mb="20">
        Memory Cards
      </Title>
      <div>
        <Box w="50%">
          <Text fz="24" fw="bold">
            Это простая игра для развития памяти и внимательности!
          </Text>
          <Text fz="14" color="var(--dark-text-color)" fw="bold">
            Игра состоит из множества карточек на экране. Все карточки скрыты.
            Нужно переворачивать карточки, и ваша задача состоит в том, чтобы
            угадать все карточки попарно!
          </Text>
          <SimpleGrid cols={3} spacing="sm" w="400" m="auto">
            {emoji.map((em, i) => (
              <EmojiCard emoji={em} key={i} />
            ))}
          </SimpleGrid>
        </Box>
        <Box w="50%" className={cls.btnBlock}>
          <Text fz="24" fw="bold">
            Проверьте свою память – сколько карточек вы сможете запомнить?
          </Text>
          <NavLink
            to={
              user
                ? routePaths[RouteNames.START_GAME]
                : routePaths[RouteNames.AUTHORIZATION]
            }
            className={cls.linkBtn}
          >
            Играть
          </NavLink>
          <Text color="var(--dark-text-color)" fz="14" fw="bold">
            Еще не авторизованы?
          </Text>
          <Space h="md" />
          <Text color="var(--dark-text-color)" fz="14" fw="bold">
            Пройдите регистрацию, чтобы играть, видеть ваши результаты в
            лидерборде и соревноваться с другими игроками!
          </Text>
          <NavLink
            to={routePaths[RouteNames.AUTHORIZATION]}
            className={cls.linkBtn}
          >
            Регистрация
          </NavLink>
        </Box>
      </div>
    </div>
  );
};
