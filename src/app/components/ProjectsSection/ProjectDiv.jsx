'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  FaCss3, FaJs,
  FaReact, FaNodeJs, FaPython, FaJava, FaVuejs, FaAngular, FaHtml5,
} from 'react-icons/fa';
import { SiCsharp, SiDjango, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';

export default function ProjectDiv({ project: {
  name, technologies, finishDate, image, link } }) {
  const [isHovering, setIsHovering] = useState(false);

  const iconComponents = {
    HTML: FaHtml5,
    CSS: FaCss3,
    JavaScript: FaJs,
    React: FaReact,
    'Node.js': FaNodeJs,
    Python: FaPython,
    Java: FaJava,
    'Vue.js': FaVuejs,
    Angular: FaAngular,
    Ruby: DiRuby,
    'Next.js': SiNextdotjs,
    Django: SiDjango,
    PostgreSQL: SiPostgresql,
    MySQL: GrMysql,
    CSharp: SiCsharp,
    Express: FaNodeJs,
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative min-w-[16rem] w-16 h-72 m-4 overflow-hidden rounded-lg shadow-lg
      cursor-pointer transform-gpu transition duration-500 hover:scale-110
      hover:shadow-2xl border-0"
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
    >
      <div className="absolute inset-0">
        <Image
          src={ image }
          alt={ name }
          width={ 512 }
          height={ 288 }
          className="w-full h-full object-cover"
        />
        {isHovering && (
          <div
            className="text-lg absolute bottom-0 right-0 w-full bg-black opacity-50 h-9
            flex justify-around items-center transition duration-300"
          >
            <p className="bg-black text-white text-center">{finishDate}</p>
            <p
              className="bg-black text-white text-center"
            >
              Ver Mais
            </p>
          </div>
        )}
      </div>

      <div
        className={ `absolute inset-0 flex flex-col items-center justify-center
      p-4 text-white bg-black bg-opacity-70 transition duration-300
      ${isHovering ? 'opacity-0' : 'opacity-100'}` }
      >
        <h2 className="text-2xl font-semibold mb-2 text-center w-10/12">{name}</h2>
        <div className="flex gap-2 text-xl">
          {technologies.map((tech, index) => {
            const IconComponent = iconComponents[tech];
            return IconComponent && <IconComponent key={ index } />;
          })}
        </div>
      </div>

      <a
        href={ link }
        className="absolute inset-0 w-full h-full"
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
}

ProjectDiv.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    finishDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
