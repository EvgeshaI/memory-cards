import clsx from 'clsx'
import { FC } from 'react'
import { Button, Group, Stack, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AddTopicModal } from '@/features/forum-topic/add'
import { ScrollArea } from '@/shared/ui'
import { Topics } from '../Topics/Topics'
import cls from './ForumTopicList.module.scss'

interface Props {
  className?: string
}

export const ForumTopicList: FC<Props> = props => {
  const { className } = props
  const [
    isAddTopicModalOpen,
    { open: openAddTopicModal, close: closeAddTopicModal },
  ] = useDisclosure()

  return (
    <div className={clsx(cls.root, className)}>
      <AddTopicModal
        isOpen={isAddTopicModalOpen}
        onClose={closeAddTopicModal}
      />

      <Stack gap={30} h="100%">
        <Group justify="space-between">
          <Title c="var(--text-color)">Все темы</Title>

          <Button
            variant="transparent"
            c="var(--text-color)"
            onClick={openAddTopicModal}
            p={0}>
            Создать топик
          </Button>
        </Group>

        <ScrollArea className={cls.list}>
          <Topics />
        </ScrollArea>
      </Stack>
    </div>
  )
}
