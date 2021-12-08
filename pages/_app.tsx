import type { AppProps } from "next/app"
import RuntimeConfigProvider from "../src/runtime-config-provider"

const MyApp = ({ Component, pageProps }: AppProps) => (
    <RuntimeConfigProvider>
      <Component {...pageProps} />
    </RuntimeConfigProvider>
  );

export default MyApp
