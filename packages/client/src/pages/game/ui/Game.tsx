import { Container } from '@mantine/core'
import { GameCanvas } from '@/widgets'
import cls from './Game.module.scss'

export const Game = () => {
  return (
    <Container fluid className={cls.container}>
      <GameCanvas />
    </Container>
  )
}
