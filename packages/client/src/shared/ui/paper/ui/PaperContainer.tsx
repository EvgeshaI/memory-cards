import React from 'react'
import { Paper } from '@mantine/core'
import cls from './PaperContainer.module.scss'

interface PaperContainerProps {
  children: React.ReactNode
}

export const PaperContainer: React.FC<PaperContainerProps> = ({ children }) => {
  return (
    <Paper shadow="md" radius="50px" className={cls.settingsContainer}>
      {children}
    </Paper>
  )
}
