import React from 'react'
import { EndGameInfo } from '@/widgets'
import { Container } from '@mantine/core'
import cls from './EndGamePage.module.scss'

export const EndGamePage = () => {
  return (
    <Container fluid className={cls.container}>
      <EndGameInfo />
    </Container>
  )
}
