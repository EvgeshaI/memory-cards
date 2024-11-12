import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Group, Textarea } from '@mantine/core';
import { useSanitizedSubmit } from '@/shared/lib';
import { useAddCommentForm } from '../../model/hooks/useAddCommentForm';

interface Props {
  onSuccess?: () => void;
}

export const AddCommentForm: FC<Props> = (props) => {
  const { onSuccess } = props;
  const { control, handleSubmit, onSubmit, errors } = useAddCommentForm({
    onSuccess,
  });

  const handleSanitizedSubmit = useSanitizedSubmit(onSubmit);

  return (
    <form onSubmit={handleSubmit(handleSanitizedSubmit)}>
      <Group gap={10}>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              flex="1 1 auto"
              radius={10}
              rows={2}
              placeholder="введите комментарий"
              error={!!errors.text?.message}
            />
          )}
        />

        <Button
          type="submit"
          radius="md"
          size="md"
          color="var(--accent-color)"
          flex="0 1 140px"
          h={40}
        >
          создать
        </Button>
      </Group>
    </form>
  );
};
