import { SubmitHandler, useForm } from 'react-hook-form'
import { FORM_DEFAULT_VALUES } from '../constants/form'
import { FormValues } from '../types/form'

interface Payload {
  onSuccess?: () => void
}

export const useAddTopicForm = (payload: Payload) => {
  const { onSuccess } = payload
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: FORM_DEFAULT_VALUES,
  })

  const onSubmit: SubmitHandler<FormValues> = () => {
    onSuccess?.()
  }

  return {
    control,
    handleSubmit,
    onSubmit,
  }
}
