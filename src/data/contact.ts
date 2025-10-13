import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/moritzhauschulz',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/moritz-hauschulz/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/moritzhauschulz',
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: 'mailto:moritz.hauschulz@reuben.ox.ac.uk',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
