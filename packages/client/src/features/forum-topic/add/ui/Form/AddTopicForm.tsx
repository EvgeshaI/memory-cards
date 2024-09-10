import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Button, TextInput, Textarea, Stack } from '@mantine/core';
import { useAddTopicForm } from '../../model/hooks/useAddTopicForm';

interface Props {
  onSuccess?: () => void;
}

export const AddTopicForm: FC<Props> = (props) => {
  const { onSuccess } = props;
  const { control, handleSubmit, onSubmit, errors } = useAddTopicForm({
    onSuccess,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={50}>
        <Stack gap={20}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                radius={10}
                placeholder="введите название топика"
                error={errors.name?.message}
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
                error={errors.description?.message}
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
