import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const res = await fetch(
    "https://quote-garden.onrender.com/api/v3/quotes/random?count=3"
  );
  const data = await res.json();

  return {
    props: { quotes: data },
  };
};

export default function Home({ quotes }) {
  console.log(quotes.data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1>Hi</h1>
      </div>
    </main>
  );
}
