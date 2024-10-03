import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="contact-info">
        <p>Feel free to get in touch, for example at <a href="mailto:moritz.hauschulz@stx.ox.ac.uk">moritz.hauschulz@stx.ox.ac.uk</a>.</p>
        <ContactIcons />
      </div>
    </article>
  </Main>
);

export default Contact;
