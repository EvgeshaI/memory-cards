import React from 'react'
import { Button } from '@/shared/ui'

interface ActionButtonProps {
  color: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  color,
  children,
  onClick,
  className = '',
}) => (
  <Button
    className={`action-button ${className}`}
    variant="subtle"
    color={color}
    onClick={onClick}>
    {children}
  </Button>
)
