'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Moritz Hauschulz" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Moritz Hauschulz</h2>
          <p>
            <a href="mailto:moritz.hauschulz@gmail.com">moritz.hauschulz@reuben.ox.ac.uk</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          I&apos;m reading for my PhD (=DPhil) at the{' '}
          <a href="https://www.maths.ox.ac.uk/">University of Oxford</a>. I&apos;m interested in
          understanding the intersection of machine learning, dynamical systems and randomness. This
          includes generative diffusion processes, how they relate to stochastic analysis, but also
          the use of machine learning for modeling real-world dynamical systems like weather and
          climate. I am a developer on the{' '}
          <a href="https://weathergenerator.eu"> WeatherGenerator </a> project.
        </p>
        <p>
          Before starting my PhD, I completed the MSc in Mathematical Sciences, during which I was
          lucky to be advised by{' '}
          <a href="https://www.maths.ox.ac.uk/people/georg.maierhofer"> Georg Maierhofer </a>
          for my project on structure preserving operator learning. Previously, I worked on
          generative modelling in discrete spaces with EBMs and I wrote a{' '}
          <a href="https://github.com/moritzhauschulz/samplingEBMs"> thesis </a>
          on this topic at <a href="https://www.imperial.ac.uk/computing/">Imperial</a> under the
          great supervision of <a href="http://yingzhenli.net/home/en/"> Yingzhen Li </a>.
        </p>
        <p>
          I was an undergraduate at <a href="https://www.lse.ac.uk/economics">LSE</a>.
          My work has been generously supported by the <a href="https://www.sdw.org/index.html">sdw</a> for many
          years, and I had the privilege of presiding over their UK group from 2023 to 2025.
        </p>
      </section>

      <section id="footer">
        <ContactIcons />
        <p>
          This website is based on a template by
          <a href="https://mldangelo.com/"> Michael D&apos;Angelo </a>
          available <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
        <p className="copyright">
          &copy; Moritz Hauschulz{' '}
          <a href="https://moritzhauschulz.github.io/">https://moritzhauschulz.github.io/</a>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
