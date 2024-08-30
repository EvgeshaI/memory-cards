import React from 'react'
import { Container } from '@mantine/core'
import { GameSettings } from '@/widgets'
import cls from './StartGamePage.module.scss'

export const StartGamePage = () => {
  return (
    <Container size="sm" className={cls.container}>
      <GameSettings />
    </Container>
  )
}
