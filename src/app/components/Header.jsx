'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/images/logo.svg';

import MenuHeader from './MenuHeader/MenuHeader';
import { LinkHeader } from './MenuHeader/LinkHeader';

export default function Header() {
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    const atualizarLarguraDaTela = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', atualizarLarguraDaTela);
    return () => {
      window.removeEventListener('resize', atualizarLarguraDaTela);
    };
  }, []);
  const minWidth = 732;
  return (
    <header
      className="flex h-16 items-center justify-between"
    >
      <Image
        src={ Logo }
        alt="Leonardo Santos"
        className="max-sm:w-32 my-8 ml-8 w-36"
      />
      {widthScreen <= minWidth ? <MenuHeader /> : (
        <nav
          className="flex justify-between w-auto rounded-full
        bg-neutral-800 items-center mr-8"
        >
          <LinkHeader link="/" name="Página Inicial" />
          <LinkHeader link="/projects" name="Projetos" />
          <LinkHeader link="/aboutme" name="Sobre Mim" />
          <LinkHeader link="/contact" name="Contatos" />
        </nav>
      ) }
    </header>
  );
}
