import clsx from 'clsx'
import { FC } from 'react'
import { Stack, Skeleton } from '@mantine/core'
import { Card } from '@/shared/ui'
import cls from './TopicCard.module.scss'

interface Props {
  className?: string
}

export const TopicCardSkeleton: FC<Props> = props => {
  const { className } = props

  return (
    <Card className={clsx(cls.root, className)}>
      <Stack gap={20}>
        <Skeleton width="100%" height={30} />

        <div className={cls.info}>
          <Skeleton width={150} height={26} />

          <Skeleton width={150} height={26} />
        </div>
      </Stack>
    </Card>
  )
}
