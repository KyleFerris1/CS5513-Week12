import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home} ){
  return(
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          <a href="https://www.wikipedia.org/">Wikipedia</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-primary mt-3">
            Back to home
          </Link>
        )
      }
      <footer>
        Footer placeholder
      </footer>
    </div>
  );
}
