import { Center, Text } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  text: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ text }) => (
  <Center className={cls.errorPageContainer}>
    <Text fz="120" fw="bold" color="var(--accent-color)" ta="center">
      {text}
    </Text>
    <NavLink to={routePaths[RouteNames.START_GAME]}>на главную</NavLink>
  </Center>
);
