import { Meta, StoryFn } from '@storybook/react'
import { CartHeader } from './CartHeader'

export default {
  title: 'Components/CartHeader',
  component: CartHeader
} as Meta<typeof CartHeader>

const Template: StoryFn<typeof CartHeader> = () => <CartHeader />

export const Primary = Template.bind({})
