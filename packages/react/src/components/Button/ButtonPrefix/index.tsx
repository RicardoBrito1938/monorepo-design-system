import { ComponentProps } from 'react'

type PrefixButtonProps = ComponentProps<'div'>

export const Prefix = ({ ...props }: PrefixButtonProps) => {
  return <div {...props} />
}
