import { FilmCard } from "@/components/model/film/filmCard/index";
import { MouseEvent } from "react";

// FIXME: 仮props ちゃんとした型に置き換える
type Props = {
  src: string | undefined;
  alt: string | undefined;
  handleClickFilmCard: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
};

export const FilmCardButton = ({
  handleClickFilmCard = () => {},
  ...rest
}: Props) => {
  const { alt } = rest;
  return (
    <button
      className="block"
      aria-label={`${alt}の詳細を開く`}
      onClick={handleClickFilmCard}
    >
      <FilmCard {...{ ...rest }} />
    </button>
  );
};
