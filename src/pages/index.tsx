import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-6xl mt-16 text-center w-full">
          This is the Boilerplate code for developing apps
          with:
          <ul className="mt-16 text-4xl space-y-4 text-blue-900 underline">
            <li>
              <a
                href="https://www.prisma.io/"
                target="_blank"
              >
                Prisma
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank">
                NextJS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwindcss
              </a>
            </li>
            <li>
              <a
                href="https://www.docker.com/"
                target="_blank"
              >
                Docker postgres database
              </a>
            </li>
          </ul>
        </p>
      </main>
    </div>
  );
};

export default Home;
