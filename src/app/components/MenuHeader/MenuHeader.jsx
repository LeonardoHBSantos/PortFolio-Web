'use client';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import ItemMenuHeader from './ItemMenuHeader';
import CloseMenu from './CloseMenu';

export default function MenuHeader() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button
          id="menu-button"
          className="inline-flex w-full justify-center rounded-2xl bg-neutral-800 px-4
            py-2 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none
            focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
            hover:scale-105 transition-all duration-300 ease-in-out text-left"
          onClick={ () => setIsShowing(!isShowing) }
        >
          Menu
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={ Fragment }
        show={ isShowing }
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items
          className="absolute left-0 -top-3 mt-2 w-screen h-screen
          divide-ydivide-gray-100 backdrop-blur-2xl shadow-lg ring-1
          ring-black ring-opacity-5 focus:outline-none flex justify-center
          items-center flex-col text-center"
        >
          <CloseMenu setIsShowing={ setIsShowing } isShowing={ isShowing } />
          <ItemMenuHeader
            name="Página Inicial"
            link="/"
            closeMenu={ setIsShowing }
            isShowing={ isShowing }
          />
          <ItemMenuHeader
            name="Projetos"
            link="/projects"
            closeMenu={ setIsShowing }
            isShowing={ isShowing }
          />
          <ItemMenuHeader
            name="Sobre Mim"
            link="/aboutme"
            closeMenu={ setIsShowing }
            isShowing={ isShowing }
          />
          <ItemMenuHeader
            name="Contato"
            link="/contact"
            closeMenu={ setIsShowing }
            isShowing={ isShowing }
          />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
