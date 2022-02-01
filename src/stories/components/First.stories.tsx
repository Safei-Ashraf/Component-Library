import { ComponentMeta, ComponentStory } from "@storybook/react";
import { First } from "./First";

export default {
  component: First,
  title: "components/First",
} as ComponentMeta<typeof First>;

const Template: ComponentStory<typeof First> = () => <First />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
