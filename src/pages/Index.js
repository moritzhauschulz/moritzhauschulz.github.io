import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Moritz Hauschulz' website – I am currently a mathematics student at Oxford."
      + 'I was previously affiliated with LSE, UC Berkeley and Imperial College London.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            Welcome to my site!
          </h2>
          <p>
            I&apos;m Moritz – find out more about what I do and reach out :)
          </p>
        </div>
      </header>
      <p>
        {' '}
        I am student in mathematics with an interdisciplinary background. To know more, check out my {' '}
        <Link to="/resume">resume</Link> and selected <Link to="/projects">projects</Link>. For collaborations, opportunities or if you just want to have a chat, feel free to {' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
