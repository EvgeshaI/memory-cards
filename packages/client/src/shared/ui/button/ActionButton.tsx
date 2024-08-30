import React from 'react'
import { Button } from '@/shared/ui'
import clsx from 'clsx'

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
    className={clsx('action-button', className)}
    variant="subtle"
    color={color}
    onClick={onClick}>
    {children}
  </Button>
)
