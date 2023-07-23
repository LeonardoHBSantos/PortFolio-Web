'use client';

import React, { useEffect, useState } from 'react';

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
  const minWidth = 640;
  return (
    <header
      className={ `${widthScreen <= minWidth ? 'justify-end' : 'justify-center'}
      flex h-16 items-center mx-8` }
    >
      {widthScreen <= minWidth ? <MenuHeader /> : (
        <nav
          className="flex justify-between w-auto rounded-full
        bg-neutral-700 p-3 items-center"
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
