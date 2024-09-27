import React from 'react'
import { Avatar, Divider, Group, Text } from '@mantine/core'
import { RESOURCES_URL } from '@/shared/constants/api'
import { timeFormat } from '@/shared/lib'

interface PlayerInfoProps {
  avatar?: string;
  name: string;
  count: number;
}
export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  avatar,
  name,
  count,
}) => {
  const avatarUrl = avatar ? `${RESOURCES_URL}${avatar}` : '';
  const time = timeFormat(count);
  return (
    <div>
      <Group p="5px" justify="space-between">
        <Group>
          <Avatar src={avatarUrl} radius="xl" />
          <Text>{name}</Text>
        </Group>
        <Text>{time}</Text>
      </Group>
      <Divider color="var(--accent-color)" mb="10px" />
    </div>
  );
};
