import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  return (
    <SWRConfig value={{ onError: (error: Error) => console.log(error) }}>
      <AnyComponent {...pageProps} />
    </SWRConfig>
  )
}
