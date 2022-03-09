import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleButton from "./Toggle";

export default {
  title: "Form/Toggle",
  component: ToggleButton,

  args: {
    variant: "Small",
  },

  argTypes: {
    variant: {
      options: ["Default", "Small"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const defaultSize = Template.bind({});
export const smallSize = Template.bind({});

defaultSize.args = {
  variant: "Default",
};

smallSize.args = {
  variant: "Small",
};
