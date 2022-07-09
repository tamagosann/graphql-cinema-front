import { FilmCard } from "@/components/model/film/filmCard/index";
import { FilmModel } from "@/graphql/generated.graphql";
import { MouseEvent } from "react";
import { FilmCardButton } from "@/components/model/film/filmCardButton";

type Props = {
  listTitle?: string;
  films?: FilmModel[];
};

export const HorizontalFilmCardList = ({
  listTitle = "ジャンル",
  films,
}: Props) => {
  return (
    <>
      {/* TODO:とりあえずh2で置くが、後でセマンティック部分は整理する */}
      <h2 className="mb-3 font-bold">ジャンル</h2>
      <ul className="flex space-x-4 overflow-scroll mb-3" role="list">
        {!films || !films.length
          ? [...Array(10)].map((_, index: number) => {
              return (
                <li key={index} className="flex-none" role="listitem">
                  <FilmCardButton />
                </li>
              );
            })
          : films.map(
              ({ id, backdrop_path, poster_path, title, original_title }) => {
                return (
                  <li key={id} className="flex-none" role="listitem">
                    <FilmCardButton
                      src={backdrop_path || poster_path}
                      alt={title || original_title}
                    />
                  </li>
                );
              }
            )}
      </ul>
    </>
  );
};
