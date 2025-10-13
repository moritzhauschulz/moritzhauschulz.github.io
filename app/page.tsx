import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Moritz Hauschulz is a data scientist, machine learning engineer, and full-stack engineer.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Welcome to my site</Link>
            </h2>
            <p>I&apos;m Moritz – find out more about what I do and reach out :)</p>
          </div>
        </header>
        <p>
          {' '}
          I am a PhD student on the Intelligent Earth CDT at the University of Oxford. I have an
          interdisciplinary background in Mathematics, Computing and Econometrics. To know more,
          check out my <Link href="/resume">resume</Link> and selected{' '}
          <Link href="/projects">projects</Link>. For collaborations, opportunities or if you just
          want to have a chat, feel free to <Link href="/contact">contact</Link> me.
        </p>
      </article>
    </PageWrapper>
  );
}
