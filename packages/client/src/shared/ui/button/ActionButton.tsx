import React from 'react';
import clsx from 'clsx';
import { Button } from '@mantine/core';

interface ActionButtonProps {
  color: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
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
    style={{ color: `var(--${color})` }}
    onClick={onClick}
  >
    {children}
  </Button>
);
