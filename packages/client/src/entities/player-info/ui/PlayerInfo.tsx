import React from 'react'
import { Avatar, Divider, Group, Text } from '@mantine/core'

interface PlayerInfoProps {
  avatar: string
  name: string
  count: number
}
export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  avatar,
  name,
  count,
}) => {
  return (
    <div>
      <Group p="5px" justify="space-between">
        <Group>
          <Avatar src={avatar} radius="xl" />
          <Text>{name}</Text>
        </Group>
        <Text>{count}</Text>
      </Group>
      <Divider color="var(--accent-color)" mb="10px" />
    </div>
  )
}
