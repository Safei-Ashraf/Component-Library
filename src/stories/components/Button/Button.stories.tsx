import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  // default args
  args: {
    children: "Button",
  },
  // in case controls not working
  argTypes: {
    varient: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// arg in story book
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

export const SecondaryA = Template.bind({});

export const SuccessA = Template.bind({});

PrimaryA.args = {
  varient: "primary",
  children: "we named you fool",
};

SecondaryA.args = {
  ...PrimaryA.args,
  varient: "secondary",
};

SuccessA.args = {
  varient: "success",
};
