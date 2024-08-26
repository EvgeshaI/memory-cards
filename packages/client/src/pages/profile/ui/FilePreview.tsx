import React from 'react'
import { Button } from '@/shared/ui'

interface FilePreviewProps {
  selectedFile: File
  onSubmit: () => void
}

export const FilePreview: React.FC<FilePreviewProps> = ({
  selectedFile,
  onSubmit,
}) => (
  <div>
    <p>Выбранный файл: {selectedFile.name}</p>
    <Button fullWidth mt="md" onClick={onSubmit}>
      Сохранить
    </Button>
  </div>
)
