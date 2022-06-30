import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const containerClass: string = "page-index";
const message: string = "Let's try edit ./pages/index.tsx !";
const messageSub: string = "The style of this message is due to modularized css.";
console.info("this page is 'pages/index.tsx'.");

const Index: NextPage = () => {
  return (
    <article className="contents" id="page_root">
      <div className={'container ' + containerClass}>
        <h1 className="text-white font-bold text-4xl text-center">index.tsx</h1>
        <h2 className="text-white font-bold text-2xl text-center mt-8">Hello, Next.js + Tailwind CSS + TypeScript.</h2>
        <p className="mt-4 text-slate-300 text-xl text-center">Message: {message}</p>

        <div className="flex justify-center items-center mt-4">
          <span className="mr-2">Powered by</span>
          <Image className="logoImageSource" src="/images/nextjs_logo.svg" alt="Next.js Logo" width={100} height={60} />
        </div>

        <div className="mt-8">
          <Link href="/about">
            <a className="text-center"><p className="text-blue-900 underline">link to: pages/about.tsx</p></a>
          </Link>
        </div>

      </div>
    </article>
  )
}

export default Index
