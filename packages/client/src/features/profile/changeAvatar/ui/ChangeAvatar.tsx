import React, { useState, useRef, useCallback } from 'react'
import { changeAvatar } from '@/entities/user'
import { AvatarDisplay } from './AvatarDisplay'
import { FilePreview } from '@/pages/profile/ui/FilePreview'
import { Notification } from '@/shared/ui'
import cls from './ChangeAvatar.module.scss'

interface ChangeAvatarProps {
  userId: string
  avatarUrl?: string
  onAvatarChange: (newAvatarUrl: string) => void
}

export const ChangeAvatar: React.FC<ChangeAvatarProps> = ({
  userId,
  avatarUrl,
  onAvatarChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const resetFileSelection = useCallback(() => setSelectedFile(null), [])

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFile(e.target.files?.[0] || null)
      setNotification(null)
    },
    []
  )

  const handleAvatarClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!selectedFile) return
    try {
      const updatedUser = await changeAvatar(userId, selectedFile)
      onAvatarChange(updatedUser.avatar)
      setNotification({ type: 'success', message: 'Аватар изменен' })
      resetFileSelection()
    } catch {
      setNotification({ type: 'error', message: 'Не удалось изменить аватар' })
    }
  }, [selectedFile, userId, onAvatarChange, resetFileSelection])

  return (
    <div className={cls.changeAvatar}>
      {notification && (
        <Notification color={notification.type === 'success' ? 'green' : 'red'}>
          {notification.message}
        </Notification>
      )}

      <AvatarDisplay avatarUrl={avatarUrl} onClick={handleAvatarClick} />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {selectedFile && (
        <FilePreview selectedFile={selectedFile} onSubmit={handleSubmit} />
      )}
    </div>
  )
}
