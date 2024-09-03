import { FC } from 'react';
import { Group, Stack, Skeleton } from '@mantine/core';

interface Props {
  className?: string;
}

export const CommentCardSkeleton: FC<Props> = (props) => {
  const { className } = props;

  return (
    <Stack className={className} gap={10}>
      <Group gap={20}>
        <Skeleton width={40} height={40} radius="50%" />

        <Stack gap={5}>
          <Skeleton width={100} height={15} />
          <Skeleton width={100} height={8} />
        </Stack>
      </Group>

      <Skeleton width="100%" height={50} />
    </Stack>
  );
};
