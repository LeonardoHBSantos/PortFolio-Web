import Link from 'next/link';
import PropTypes from 'prop-types';

export function LinkHeader({ link, name }) {
  return (
    <Link
      href={ link }
      className="text-white text-1xl mx-4 p-0 text-center"
    >
      {name}
    </Link>
  );
}

LinkHeader.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
