import "../styles/global.css"
import { App as KonstaApp } from "konsta/react"

/** @param { import("next/app").AppProps } param0 */
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <KonstaApp theme="material" safeAreas={true}>
      <Component {...pageProps} />
    </KonstaApp>
  )
}
export default App
