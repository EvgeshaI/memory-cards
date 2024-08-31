import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Button, Group, Textarea } from '@mantine/core'
import { useAddCommentForm } from '../../model/hooks/useAddCommentForm'

interface Props {
  onSuccess?: () => void
}

export const AddCommentForm: FC<Props> = props => {
  const { onSuccess } = props
  const { control, handleSubmit, onSubmit } = useAddCommentForm({ onSuccess })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            />
          )}
        />

        <Button
          type="submit"
          radius="md"
          size="md"
          color="var(--accent-color)"
          flex="0 1 140px"
          h={40}>
          создать
        </Button>
      </Group>
    </form>
  )
}
