import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function SocialMedia() {
  const classes = 'text-white text-3xl text-zinc-400 transition hover:text-white';
  return (
    <div
      className="flex gap-6 my-4"
    >
      <Link
        href="https://github.com/LeonardoHBSantos"
      >
        <FaGithub
          className={ classes }
        />
      </Link>
      <Link
        href="https://github.com/LeonardoHBSantos"
      >
        <FaLinkedin
          className={ classes }
        />
      </Link>
      <Link
        href="https://github.com/LeonardoHBSantos"
      >
        <FaInstagram
          className={ classes }
        />
      </Link>
      <Link
        href="https://github.com/LeonardoHBSantos"
      >
        <FaMedium
          className={ classes }
        />
      </Link>
    </div>
  );
}
