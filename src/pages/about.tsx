import type { NextPage } from 'next'
import Link from 'next/link'

const containerClass: string = "page-about";
const message: string = "Let's try edit ./pages/index.tsx !";
console.info("this page is 'pages/index.tsx'.");

const About: NextPage = () => {
  return (
    <article className="contents" id="page_root">
      <div className={'container ' + containerClass}>
        <h1 className="text-white font-bold text-4xl text-center">about.tsx</h1>
        <h2 className="text-white font-bold text-2xl text-center mt-8">Hello, Next.js + Tailwind CSS + TypeScript.</h2>
        <p className="mt-4 text-slate-300 text-xl text-center">Message: {message}</p>

        <div className="mt-8">
          <Link href="/">
            <a className="text-center"><p className="text-blue-900 underline">link to: pages/index.tsx</p></a>
          </Link>
        </div>

      </div>
    </article>
  )
}

export default About
