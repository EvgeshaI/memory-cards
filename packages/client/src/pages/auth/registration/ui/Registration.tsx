import { Center, Container } from '@mantine/core';
import { RegistrationForm } from '@/features/auth';
import cls from './Registration.module.scss';

export const Registration = () => (
  <div className={cls.root}>
    <Container flex={1} h="100%">
      <Center h="100%">
        <RegistrationForm />
      </Center>
    </Container>
  </div>
);
