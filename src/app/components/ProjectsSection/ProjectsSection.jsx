'use client';

import { useSpringCarousel } from 'react-spring-carousel';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import ProjectDiv from './ProjectDiv';
import projects from '../../assets/data/projects';

export default function ProjectsSection() {
  const widthScreens = {
    mobile: 480,
    tablet: 640,
    laptop: 768,
    desktop: 1024,
  };

  const numberSlides = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };
  function slidesNumber(width) {
    if (width < widthScreens.mobile) {
      return numberSlides.one;
    } if (width < widthScreens.tablet) {
      return numberSlides.two;
    } if (width < widthScreens.laptop) {
      return numberSlides.three;
    } if (width < widthScreens.desktop) {
      return numberSlides.four;
    }
    return numberSlides.five;
  }

  const [widthScreen, setWidthScreen] = useState(widthScreens.desktop);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthScreen(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidthScreen(window.innerWidth);
      });
    };
  }, []);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    startEndGutter: 16,
    itemsPerSlide: slidesNumber(widthScreen),
    withLoop: true,
    initialStartingPosition: 'start',
    items: projects.map((i) => ({
      id: i.name,
      renderItem: (
        <ProjectDiv key={ i.name } project={ i } />
      ),
    })),
  });

  return (
    <section
      className="h-auto overflow-hidden w-screen h-auto max-w-screen
      flex justify-center items-center"
    >

      <div
        className="w-11/12 relative flex justify-center items-center"
      >
        <div
          className="w-11/12 h-auto overflow-hidden w-screen h-auto max-w-screen
        rounded-lg"
        >
          {carouselFragment}
        </div>
        <button
          onClick={ slideToPrevItem }
          className="text-white inline-block w-8 absolute top-1/2 left-0 text-4xl"
        >
          <BsCaretLeftFill />
        </button>
        <button
          onClick={ slideToNextItem }
          className="text-white inline-block w-8 absolute top-1/2 right-0 text-4xl"
        >
          <BsCaretRightFill />
        </button>

      </div>
    </section>
  );
  // return (
  //   <section
  //     className=""
  //   >
  //     {projects.map((project) => <ProjectDiv key={ project.name } project={ project } />)}
  //   </section>
  // );
}
