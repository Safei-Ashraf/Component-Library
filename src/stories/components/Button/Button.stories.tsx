/* eslint-disable react/function-component-definition */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  // default args
  args: {
    type: "primary",
    size: "md",
    disabled: false,
    text: "Click",
    hasIcon: false,
    iconDirection: "left",
  },
  // in case controls not working
  argTypes: {
    type: {
      options: ["primary", "secondary", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// arg in story book
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Text = Template.bind({});

Primary.args = {
  type: "primary",
  text: "Primary Button",
  size: "lg",
};
