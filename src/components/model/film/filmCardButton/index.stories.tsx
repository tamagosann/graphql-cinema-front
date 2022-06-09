import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilmCardButton } from "@/components/model/film/filmCardButton/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Film/FilmCardButton",
  component: FilmCardButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FilmCardButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilmCardButton> = (args) => (
  <FilmCardButton {...args} />
);

export const WithProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProps.args = {
  src: "https://api.lorem.space/image/shoes?w=400&h=225",
  alt: "shoes",
  handleClickFilmCard: () => console.log("clicked"),
};

export const NoProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoProps.args = {
  src: undefined,
  alt: undefined,
  handleClickFilmCard: () => console.log("clicked"),
};
