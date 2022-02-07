import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Small: ComponentStory<typeof Input> = () => (
  <Input size="small" placeHolder="small" />
);
export const Medium: ComponentStory<typeof Input> = () => (
  <Input size="medium" placeHolder="medium" />
);
export const Large: ComponentStory<typeof Input> = () => (
  <Input size="large" placeHolder="large" />
);

// renaming of stories
Small.storyName = "small-story";
