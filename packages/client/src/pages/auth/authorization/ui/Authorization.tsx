import { Center, Container } from '@mantine/core';
import { AuthorizationForm } from '@/features/auth';
import cls from './Authorization.module.scss';

export const Authorization = () => (
  <div className={cls.root}>
    <Container flex={1} h="100%">
      <Center h="100%">
        <AuthorizationForm />
      </Center>
    </Container>
  </div>
);
