import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

/**
 ## memo

 - import "@"
   "@" はモジュールインポートのエイリアス。
   "tsconfig.json" の "compilerOptions.paths" で定義できる。（使わなくても良い）

- "<>" , "</>" 
  React.Fragment のショートカット。
  特に JSX では return する要素は単一である必要があるので、"<React.Fragment> ~ </React.Fragment>" で囲むことになるが、
  これのショートカットが "<> ~ </>" となる。
*/
