import { MantineProvider as Provider } from '@mantine/core'
import { PropsWithChildren } from 'react'

export const MantineProvider = ({ children }: PropsWithChildren) => (
  <Provider>{children}</Provider>
)
