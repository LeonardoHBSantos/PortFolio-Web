import { Menu } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

export default function CloseMenu({ setIsShowing, isShowing }) {
  return (
    <Menu.Item>
      <button
        type="button"
        onClick={ () => setIsShowing(!isShowing) }
        className="text-white absolute top-6 right-6 text-3xl flex w-auto
              items-center"
      >
        <XCircleIcon
          className="ml-2 -mr-1 h-5 w-5 text-white backdrop-filter-none"
          aria-hidden="true"
        />
      </button>
    </Menu.Item>
  );
}

CloseMenu.propTypes = {
  setIsShowing: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
};
