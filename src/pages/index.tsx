import Layout from "components/layouts/layout";
import { IndexTemplate } from "components/templates/index";
import { pageMeta } from "constants/pageMeta";
import type { NextPage } from "next";
import Head from "next/head";

const { indexPage: indexPageMeta } = pageMeta;

const Home: NextPage = () => {
  return (
    <Layout {...indexPageMeta}>
      <IndexTemplate />
    </Layout>
  );
};

export default Home;
