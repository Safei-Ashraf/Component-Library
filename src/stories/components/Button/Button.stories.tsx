import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  // args: {
  //   children: "Default Btn",
  // },
} as ComponentMeta<typeof Button>;

// export const Primary = () => <Button varient="primary">Primary</Button>;
export const Secondary = () => <Button varient="secondary">secondary</Button>;
export const Success = () => <Button varient="success">success</Button>;
export const Danger = () => <Button varient="danger">danger</Button>;

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
  varient: "secondary",
};

SuccessA.args = {
  ...PrimaryA.args,
  varient: "success",
};
