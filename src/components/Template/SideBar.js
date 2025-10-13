import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Moritz E. Hauschulz</h2>
        <p>
          <a href="mailto:moritz.hauschulz@stx.ox.ac.uk">moritz.hauschulz@stx.ox.ac.uk</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m reading for my PhD (=DPhil)
        at the <a href="https://www.maths.ox.ac.uk/">University of Oxford</a>.
        I am interested in understanding the intersection of
        machine learning, dynamical systems and stochastic processes. This includes generative diffusion processes,
        how they relate to stochastic analysis,
        but also the use of machine learning for modeling real-world dynamical systems
        like weather and climate. 
      </p>
      <p>
        Before starting my PhD, I completed the MSc in Mathematical Sciences, during which I was lucky to be advised by <a href="https://www.maths.ox.ac.uk/people/georg.maierhofer"> Georg Maierhofer </a> and 
        <a href="https://www.maths.ox.ac.uk/people/georg.maierhofer"> N</a>
        for my project on structure preserving operator learning.
        Previously, I worked on generative modelling in discrete spaces with EBMs and I wrote a {' '}<a href="https://github.com/moritzhauschulz/samplingEBMs"> thesis </a>
        on this topic at <a href="https://www.imperial.ac.uk/computing/">Imperial</a> under the great supervision of <a href="http://yingzhenli.net/home/en/"> Yingzhen Li </a>.
      </p>
      <p>
        I was an undergraduate at <a href="https://www.lse.ac.uk/economics">LSE</a>,
        where I met the amazing people whom I helped build  <a href="https://alexandria-media.org/">Alexandria </a>
        before starting my graduate studies.
        My work has been generously supported by the <a href="https://www.sdw.org/index.html">sdw</a> for many years,
        whose UK group I presided from 2023 to 2025.
      </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p>
        This website is based on a template by
        <a href="https://mldangelo.com/"> Michael D&apos;Angelo </a>
        available <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p>
      <p className="copyright">
        &copy; Moritz E. Hauschulz <a href="https://moritzhauschulz.github.io/">https://moritzhauschulz.github.io/</a>.
      </p>
    </section>
  </section>
);

export default SideBar;
