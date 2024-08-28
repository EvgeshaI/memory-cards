import { Button, Group, Text } from '@mantine/core'
import { PaperContainer } from '@/shared/ui/paper'
import React from 'react'

export const EndGameInfo = () => {
  return (
    <PaperContainer text={'Конец игры'}>
      <Group justify="space-between" w="50%" m="0 auto 20px">
        <div>
          <Text fz="22px">время</Text>
          <Text fz="16px">20:00</Text>
        </div>
        <div>
          <Text fz="22px">счет</Text>
          <Text fz="16px">2020</Text>
        </div>
      </Group>
      <Button
        w="70%"
        radius="md"
        size="md"
        mb="20px"
        color="var(--accent-color)">
        играть снова
      </Button>
      <Button w="70%" radius="md" size="md" color="var(--accent-color)">
        на главную
      </Button>
    </PaperContainer>
  )
}
