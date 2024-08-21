import { Title, Button } from '@/shared/ui'
import cls from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={cls.root}>
      <Title>MainPage</Title>
      <Button>Test</Button>
    </div>
  )
}
