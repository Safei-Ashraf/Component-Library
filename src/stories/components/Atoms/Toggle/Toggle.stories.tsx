import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toggle } from './Toggle';

export default {
  title: 'Form/Toggle',
  component: Toggle,

  // in case controls not working
  argTypes: {
    sizeSetting: { control: 'radio', options: ['sm', 'lg'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Toggle>;

// arg in story book
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleA = Template.bind({});
