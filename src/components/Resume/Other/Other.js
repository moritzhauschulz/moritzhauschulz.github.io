import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const LinkRenderer = ({ href, children }) => {
  const isExternal = (url) => url && (url.startsWith('http') || url.endsWith('.pdf'));

  return (
    <a
      href={href}
      target={isExternal(href) ? '_blank' : '_self'}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

const Other = ({ data }) => (
  <li className="other-container">
    <h4 className="other-name">{data.title}:</h4>
    <Markdown
      options={{
        overrides: {
          a: {
            component: LinkRenderer, // Use LinkRenderer to handle links
          },
          p: {
            props: {
              className: 'other-description',
            },
          },
        },
      }}
    >
      {data.description}
    </Markdown>
  </li>
);

Other.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, // Markdown description
  }).isRequired,
};

LinkRenderer.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Other;
