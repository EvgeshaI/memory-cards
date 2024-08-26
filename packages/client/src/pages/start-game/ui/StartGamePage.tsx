import React from 'react'
import { Button, Container, Paper, Select, Text } from '@mantine/core'
import cls from './StartGamePage.module.scss'
import headerIcon from '../../../shared/svg/header.svg'

export const StartGamePage = () => {
  return (
    <Container size="sm" className={cls.container}>
      <Paper shadow="md" radius="50px" className={cls.settingsContainer}>
        <div className={cls.title}>
          <img src={headerIcon} alt={'header'}/>
        </div>
        <h2 className={cls.titleText}>Настройки</h2>
        <Text  size="lg" mb="md" color="var(--accent-color)">
          выберите количество карточек
        </Text>
        <Select
          placeholder="10"
          data={['6', '8', '10', '12', '14', '20']}
          variant="filled"
          radius="md"
          size="md"
          style={{ marginBottom: 20 }}
          defaultValue="10"
        />

        <Button
          fullWidth
          radius="md"
          size="md"
          style={{ backgroundColor: 'var(--accent-color)' }}
        >
          играть
        </Button>
      </Paper>
    </Container>
  );
};


