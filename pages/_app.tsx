import '../styles/globals.scss'
import { useEffect } from "react";
import { ThemeProvider } from "../context/theme-context";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp;
