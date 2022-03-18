import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Form/Avatar',
  component: Avatar,
  // default args
  args: {
    size: 'sm',
    type: 'anon',
  },
  // in case controls not working
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['anon', 'user', 'default'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Avatar>;

// arg in story book
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});

AvatarDefault.args = {
  type: 'anon',
  size: 'sm',
};
