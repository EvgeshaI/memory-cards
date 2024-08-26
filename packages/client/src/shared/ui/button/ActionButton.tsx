import React from 'react'
import { Button } from '@/shared/ui'

interface ActionButtonProps {
  color: string
  children: React.ReactNode
  onClick?: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  color,
  children,
  onClick,
}) => (
  <Button variant="subtle" color={color} onClick={onClick}>
    {children}
  </Button>
)
