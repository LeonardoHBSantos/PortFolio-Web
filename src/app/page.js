import Image from 'next/image';
import Header from './components/Header';
import Photo from './assets/images/profile.jpg';
import SocialMedia from './components/SocialMedia';

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-start justify-center"
      >
        <section
          className="flex flex-col items-start justify-center
          max-md:max-w-2xl ml-12 max-w-3xl"
        >
          <Image
            src={ Photo }
            alt="Leonardo Santos"
            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
          />
          <h1
            className="max-md:text-4xl text-5xl font-bold tracking-tight text-zinc-800
            dark:text-zinc-100 sm:text-5xl my-4"
          >
            Desenvolvedor Web Full Stack
          </h1>
          <p
            className="text-base text-zinc-600 dark:text-zinc-400"
          >
            Prazer, sou o Leonardo, um apaixonado por programação e desafios, sempre
            buscando aperfeiçoar minhas habilidades para criar soluções únicas e
            criativas.
          </p>
          <SocialMedia />
        </section>
      </main>
    </>
  );
}
