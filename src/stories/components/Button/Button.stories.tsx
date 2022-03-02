import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  // default args
  args: {
    variant: "primary",
    children: "Button Text",
    size: "medium",
    disable: false,
  },
  // in case controls not working just provide controls type
  argTypes: {
    variant: {
      options: ["primary", "secondary", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// arg in story book
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const large = Template.bind({});

export const medium = Template.bind({});

export const small = Template.bind({});

large.args = {
  variant: "primary",
  size: "large",
};

medium.args = {
  ...large.args,
  size: "medium",
};

small.args = {
  ...large.args,
  size: "small",
};
