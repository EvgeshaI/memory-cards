import {
  Card as MantineCard,
  CardProps as MantineCardProps,
  PolymorphicComponentProps,
} from '@mantine/core'

export const Card = (
  props: PolymorphicComponentProps<'div', MantineCardProps>
) => {
  return (
    <MantineCard
      padding="20px 60px"
      radius="40"
      bg="var(--card-background)"
      {...props}
    />
  )
}
