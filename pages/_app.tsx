import '../styles/globals.scss'
import { ThemeProvider } from "../context/theme-context";

function MyApp({ Component, pageProps }: any) {

  return <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp;
