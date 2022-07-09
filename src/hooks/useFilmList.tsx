import {
  FilmModel,
  FilmsIndexPageDocument,
  FilmsIndexPageQuery,
} from "@/graphql/generated.graphql";
import { urqlClient } from "@/libs/grql-request";
import useSWR from "swr";

// TODO: 後で正式なものに修正
type Props = {
  genreId: number;
};

const fetcher = async (key: string, genreId: number) => {
  const client = await urqlClient();

  const result = await client
    .query<FilmsIndexPageQuery>(FilmsIndexPageDocument, {})
    .toPromise();
  console.log(result.data);
  return result.data?.films;
};

export const useFilmList = ({ genreId }: Props) => {
  const { data, error } = useSWR(["filmList", genreId], fetcher);
  console.log(data, error);
  return {
    data,
    error,
  };
};
