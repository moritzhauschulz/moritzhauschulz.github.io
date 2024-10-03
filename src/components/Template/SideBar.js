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
        <h2>Mortiz E. Hauschulz</h2>
        <p>
          <a href="mailto:moritz.hauschulz@stx.ox.ac.uk">moritz.hauschulz@stx.ox.ac.uk</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m Moritz. I am interested in the mathematical fundamentals of disruptive technologies. I recently started to study towards the MSc in Mathematical Sciences 
        at the <a href="https://www.ox.ac.uk/admissions/undergraduate/courses/course-listing/mathematics">University of Oxford</a>, and am actively searching doctoral positions in the space of 
        machine learning foundations with applications in scientific research including weather, fusion and quantum.
        My recent work focuses on generative modelling in discrete spaces with energy based models, 
        and I wrote a {' '}<a href="https://github.com/moritzhauschulz/samplingEBMs"> thesis </a>
        on this topic at <a href="https://www.imperial.ac.uk/computing/">Imperial</a>.
        I was an undergraduate at <a href="https://www.lse.ac.uk/economics">LSE</a>, where I met the amazing people whom I helped build  <a href="https://alexandria-media.org/">Alexandria</a> before starting my graduate studies.
        My work has been generously supported by <a href="https://www.sdw.org/index.html">sdw</a> for many years, and I am currently president of their UK group.
      </p>
      <ul className="actions">
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
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
