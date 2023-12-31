import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4"></div>
            <Link href="/">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </Link>
            {/* <Link href="/blog-page">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Blog
              </a>
            </Link> */}
            <Link href="/contact-page">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-align"
          href="./tokushohou-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          特定商取引法に関する情報
        </a>
      </footer>
    </div>
  );
}
