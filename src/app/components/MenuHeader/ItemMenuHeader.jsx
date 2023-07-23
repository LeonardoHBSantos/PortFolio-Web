import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu } from '@headlessui/react';

export default function ItemMenuHeader({ name, link, closeMenu, isShowing }) {
  return (
    <Menu.Item
      className="text-white flex w-auto items-center backdrop-filter-none"
    >
      <Link
        href={ link }
        className="text-white flex w-auto items-center
        justify-center rounded-2xl px-2 py-2 text-2xl"
        onClick={ () => closeMenu(!isShowing) }
      >
        {name}
      </Link>
    </Menu.Item>
  );
}

ItemMenuHeader.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
};
