import cls from './EndGamePage.module.scss'
import React from 'react'
import { EndGameInfo } from '@/widgets/end-game-info'
import { Container } from '@mantine/core'

export const EndGamePage = () => {
  return (
    <Container fluid className={cls.container}>
      <EndGameInfo />
    </Container>
  )
}
