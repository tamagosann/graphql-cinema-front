import Layout from "@/components/layouts/layout";
import { IndexTemplate } from "@/components/templates/index";
import { pageMeta } from "@/constants/pageMeta";
import {
  FilmModel,
  FilmsIndexPageDocument,
  FilmsIndexPageQuery,
} from "@/graphql/generated.graphql";
import { urqlClient } from "@/libs/grql-request";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { gql } from "urql";

const { indexPage: indexPageMeta } = pageMeta;

type Props = InferGetServerSidePropsType<
  GetServerSideProps<FilmsIndexPageQuery>
>;

const Home: NextPage<Props> = ({ films }) => {
  return (
    <Layout {...indexPageMeta}>
      {/* FIXME: filmsのnullの消し方がわからないため一旦asで無理矢理型を上書きする */}
      <IndexTemplate films={films as FilmModel[] | undefined} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<FilmsIndexPageQuery> =
  async () => {
    try {
      const client = await urqlClient();

      // // 変数なしでGraphQL呼び出し
      // const filmsQuery = gql`
      //   query {
      //     films {
      //       id
      //       title
      //     }
      //   }
      // `;
      const result = await client
        .query<FilmsIndexPageQuery>(FilmsIndexPageDocument, {})
        .toPromise();
      console.log(result.data);
      return {
        props: {
          films: result.data?.films,
        },
      };
    } catch (e) {
      console.error(e);
      return {
        notFound: true,
      };
    }
  };
