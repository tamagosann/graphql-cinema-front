import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalFilmCardList } from "@/components/model/film/horizontalFilmCardList/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Film/HorizontalFilmCardList",
  component: HorizontalFilmCardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HorizontalFilmCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HorizontalFilmCardList> = (args) => (
  <HorizontalFilmCardList {...args} />
);

export const NoProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoProps.args = {
  listTitle: "スケルトン",
  films: [],
};

export const WithProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProps.args = {
  listTitle: "スタブデータ",
  films: [
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
    {
      backdrop_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      genre_ids: [28, 35, 12],
      id: 772438,
      original_title: "Matando Cabos 2: La Máscara del Máscara",
      overview:
        'Faced with the unexpected death of his estranged father -El Máscara- and the subsequent theft of his precious mask, Rubén -Mascarita- will find himself confronted with his past. Alongside his invincible bodyguard Tony "The Cannibal" and, an unexpected ally, he will have only one day to recover it and make amends with the memory of his father.',
      poster_path: "https://api.lorem.space/image/shoes?w=400&h=225",
      release_date: "2021-10-01",
      title: "Matando Cabos 2: La Máscara del Máscara",
    },
  ],
};
