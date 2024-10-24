import clsx from 'clsx';
import { memo } from 'react';
import { Popover, ActionIcon, Group, Skeleton } from '@mantine/core';
import { SmilePlus } from 'lucide-react';
import { Reaction, ReactionEmoji } from '@/entities/reaction';
import { times } from '@/shared/lib';
import { useReactionPicker } from '../../model/hooks/useReactionPicker';
import cls from './ReactionPicker.module.scss';

interface ReactionPickerProps {
  commentId: string | number;
  onSelect?: (reaction: Reaction) => void;
  onUpdate?: (reaction: Reaction) => void;
  onError?: (reaction: Reaction) => void;
}

export const ReactionPicker = memo(
  ({ commentId, onSelect, onUpdate, onError }: ReactionPickerProps) => {
    const {
      togglePicker,
      setReaction,
      reactions,
      setIsPickerOpen,
      isPickerOpen,
      isLoading,
    } = useReactionPicker({ commentId, onSelect, onUpdate, onError });

    return (
      <Popover
        shadow="md"
        position="top"
        opened={isPickerOpen}
        onChange={setIsPickerOpen}
        classNames={{ dropdown: cls.dropdown }}
      >
        <Popover.Target>
          <ActionIcon
            className={cls.target}
            variant="subtle"
            size="compact-xs"
            onClick={togglePicker}
          >
            <SmilePlus />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Group gap={0}>
            {(reactions.length === 0 || isLoading) &&
              times(5, (index) => (
                <ActionIcon
                  key={index}
                  disabled
                  className={clsx(cls.reaction)}
                  size="xl"
                  variant="transparent"
                >
                  <Skeleton width={30} height={30} radius={50} />
                </ActionIcon>
              ))}

            {reactions.map((reaction) => (
              <ActionIcon
                key={reaction.id}
                className={clsx(cls.reaction)}
                size="xl"
                variant="transparent"
                onClick={setReaction(reaction)}
              >
                <ReactionEmoji size={30} reaction={reaction} />
              </ActionIcon>
            ))}
          </Group>
        </Popover.Dropdown>
      </Popover>
    );
  },
);
