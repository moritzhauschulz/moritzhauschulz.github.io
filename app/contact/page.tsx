import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Moritz Hauschulz via email @ moritz.hauschulz@reuben.ox.ac.uk',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>
            Feel free to get in touch. You can email me at
            <a href="mailto:moritz.hauschulz@reuben.ox.ac.uk"> moritz.hauschulz@reuben.ox.ac.uk</a>
            .
          </p>
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
