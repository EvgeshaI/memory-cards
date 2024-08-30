import { Button, Select, Text } from '@mantine/core'
import { PaperContainer } from '@/shared/ui'
import React from 'react'

export const GameSettings = () => {
  return (
    <PaperContainer text={'Настройки'}>
      <Text size="lg" mb="md" color="var(--accent-color)">
        выберите количество карточек
      </Text>
      <Select
        placeholder="10"
        data={['6', '8', '10', '12', '14', '20']}
        variant="filled"
        radius="md"
        size="md"
        mb="20px"
        defaultValue="10"
      />
      <Button fullWidth radius="md" size="md" color="var(--accent-color)">
        играть
      </Button>
    </PaperContainer>
  )
}
