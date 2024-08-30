import { LeadersList } from '@/widgets'
import cls from '@/pages/start-game/ui/StartGamePage.module.scss'
import { Container } from '@mantine/core'

export const Leaderboard = () => {
  return (
    <Container size="sm" className={cls.container}>
      <LeadersList />
    </Container>
  )
}
