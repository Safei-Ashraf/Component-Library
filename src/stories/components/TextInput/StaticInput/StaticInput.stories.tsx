import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StaticInput } from './StaticInput';

export default {
  title: 'Atoms/StaticInput',
  component: StaticInput,
  argTypes: {
    status: { control: 'radio', options: ['normal', 'error', 'sucess'] },
    icon: { control: 'radio', options: ['none', 'home'] },
    direction: { control: 'radio', options: ['flex-row', 'flex-row-reverse'] },
  },
} as ComponentMeta<typeof StaticInput>;

// arg in story book
const Template: ComponentStory<typeof StaticInput> = (args) => (
  <StaticInput {...args} />
);

export const IconInput = Template.bind({});
IconInput.args = {
  status: 'error',
  prefix: '+20',
  icon: 'home',
  disabled: false,
  // direction: 'flex-row'
};
