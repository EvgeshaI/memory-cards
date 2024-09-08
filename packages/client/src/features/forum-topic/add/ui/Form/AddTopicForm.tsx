import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Input, Textarea, Stack } from '@mantine/core';
import { useAddTopicForm } from '../../model/hooks/useAddTopicForm';

interface Props {
  onSuccess?: () => void;
}

export const AddTopicForm: FC<Props> = (props) => {
  const { onSuccess } = props;
  const { control, handleSubmit, onSubmit } = useAddTopicForm({ onSuccess });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={50}>
        <Stack gap={20}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                radius={10}
                placeholder="введите название топика"
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                radius={10}
                resize="vertical"
                rows={3}
                placeholder="добавьте описание"
              />
            )}
          />
        </Stack>

        <Button
          fullWidth
          type="submit"
          radius="md"
          size="md"
          color="var(--accent-color)"
          h={50}
        >
          создать
        </Button>
      </Stack>
    </form>
  );
};
