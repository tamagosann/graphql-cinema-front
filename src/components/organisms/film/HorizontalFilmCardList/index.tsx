import { useFilmList } from "@/hooks/useFilmList";
import { HorizontalFilmCardList as HorizontalFilmCardListModel } from "@/components/model/film/horizontalFilmCardList";

type Props = {
  genreId: number;
};

export const HorizontalFilmCardList = ({ genreId }: Props) => {
  const { data, error } = useFilmList({ genreId });

  if (error) {
    return (
      <>
        <p>ロードに失敗しました</p>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <HorizontalFilmCardListModel />
      </>
    );
  }
  return (
    <>
      <HorizontalFilmCardListModel films={data} />
    </>
  );
};
