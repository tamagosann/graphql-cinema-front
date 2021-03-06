import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilmCard } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Film/FilmCard",
  component: FilmCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FilmCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilmCard> = (args) => (
  <FilmCard {...args} />
);

export const WithProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProps.args = {
  src: "https://api.lorem.space/image/shoes?w=400&h=225",
  alt: "shoes",
};

export const NoProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoProps.args = {
  src: undefined,
  alt: undefined,
};
