import { HorizontalFilmCardList } from "@/components/model/film/horizontalFilmCardList";
import { HorizontalFilmCardList as HorizontalFilmCardListOrganism } from "@/components/organisms/film/HorizontalFilmCardList";
import { FilmModel } from "@/graphql/generated.graphql";

type Props = { films?: FilmModel[] };

export const IndexTemplate = ({ films }: Props) => {
  // TODO: genreIdsは、後からAPI経由に置き換える
  const genreIds = [28, 12, 14, 35, 878, 16];
  return (
    <>
      <h1>ここはトップページです</h1>
      <HorizontalFilmCardList films={films} />
      {genreIds.map((genreId) => {
        return <HorizontalFilmCardListOrganism genreId={genreId} />;
      })}
    </>
  );
};
