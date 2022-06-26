import { HorizontalFilmCardList } from "@/components/model/film/horizontalFilmCardList";
import { FilmModel } from "@/graphql/generated.graphql";

type Props = { films?: FilmModel[] };

export const IndexTemplate = ({ films }: Props) => {
  return (
    <>
      <h1>ここはトップページです</h1>
      <HorizontalFilmCardList films={films} />
    </>
  );
};
