import React from 'react';
import cls from './Card.module.scss';

interface CardProps {
  emoji: string;
}

export const EmojiCard: React.FC<CardProps> = ({ emoji }) => (
  <div className={cls.card}>
    <div className={cls.front} />
    <div className={cls.back}>
      <span aria-label="emoji">{emoji}</span>
    </div>
  </div>
);
