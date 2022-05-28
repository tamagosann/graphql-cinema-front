import { Header } from "components/ui/header";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
  description: string;
};

const Layout = ({ children, title, description }: Props) => {
  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* 下記のaタグは、既にページを訪問したことがある場合などに本文までジャンプできるリンクを挿入します。
          キーボードなどでも使えるように Tab を一度押してフォーカスした際に見えるようにします。 
      */}
      <a href="#main" className="sr-only focus:not-sr-only">
        本文にスキップ
      </a>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        {/* JSから <main> にフォーカスが当てられるように、id 属性と tabIndex="-1"を指定しています。 */}
        {/* tabindex 属性はちょうどCSSの z-index プロパティーのように、Tabキーを押した際にフォーカスの順序を指定できる属性です。
          一方で -1 を指定するとユーザーはフォーカスができなくなり、JavaScriptの Element#focus などでのみフォーカス可能になります。
      */}
        <main id="main" tabIndex={-1} className="flex-grow">
          {children}
        </main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>
              Copyright © 2022 - All right reserved by Tamagosann Industries Ltd
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
