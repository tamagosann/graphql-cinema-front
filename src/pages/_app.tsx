import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 以下の処理は、ページ遷移時のフォーカスマネージメントとアナウンスをする
  const handleRouteChange = useCallback(() => {
    const main = document.getElementById("main");
    main?.focus();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  // テーマ変更機能などを作りたくなったら下記からいじる
  return (
    <ThemeProvider themes={["dark"]} forcedTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
