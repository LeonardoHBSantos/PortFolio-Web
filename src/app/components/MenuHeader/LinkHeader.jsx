import Link from 'next/link';
import PropTypes from 'prop-types';

export function LinkHeader({ link, name }) {
  return (
    <Link
      href={ link }
      className="text-white text-sm text-center hover:bg-neutral-700 w-auto
      px-4 py-2 rounded-full"
    >
      {name}
    </Link>
  );
}

LinkHeader.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
