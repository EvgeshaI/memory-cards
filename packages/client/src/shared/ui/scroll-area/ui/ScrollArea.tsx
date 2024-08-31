import clsx from 'clsx'
import { FC } from 'react'
import {
  ScrollArea as MantineScrollArea,
  ScrollAreaProps as MantineScrollAreaProps,
  ScrollAreaStylesNames as MantineScrollAreaStylesNames,
} from '@mantine/core'
import cls from './ScrollArea.module.scss'

type Props = {
  classNames?: Partial<Record<MantineScrollAreaStylesNames, string>>
}

export const ScrollArea: FC<Props & MantineScrollAreaProps> = props => {
  const { classNames = {}, ...rest } = props

  return (
    <MantineScrollArea
      offsetScrollbars
      type="auto"
      classNames={{
        ...classNames,
        scrollbar: clsx(cls.scrollbar, classNames.scrollbar),
        thumb: clsx(cls.thumb, classNames.thumb),
      }}
      scrollbarSize={15}
      {...rest}
    />
  )
}
