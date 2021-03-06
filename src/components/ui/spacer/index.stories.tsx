import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Spacer } from ".";

export default {
  title: "UI/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 36,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  size: 36,
  axis: "horizontal",
};

export const vertical = Template.bind({});
vertical.args = {
  size: 36,
  axis: "vertical",
};
