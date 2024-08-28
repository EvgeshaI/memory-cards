import React from 'react'
import { Container } from '@mantine/core'
import cls from './StartGamePage.module.scss'
import { GameSettings } from '@/widgets/game-settings'

export const StartGamePage = () => {
  return (
    <Container size="sm" className={cls.container}>
      <GameSettings />
    </Container>
  )
}
