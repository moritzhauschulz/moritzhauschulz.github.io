import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';

// Custom Link Renderer for Markdown to handle external/internal links
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

LinkRenderer.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => {
  const isExternal = url && (url.startsWith('http') || url.endsWith('.pdf'));

  return (
    <article className="jobs-container">
      <header>
        <h4>
          {url ? (
            <a
              href={url}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {name}
            </a>
          ) : (
            name
          )} - {position}
        </h4>
        <p className="daterange">
          {dayjs(startDate).format('MMMM YYYY')} -{' '}
          {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
        </p>
      </header>
      {summary && (
        <Markdown
          options={{
            overrides: {
              a: { component: LinkRenderer },
              p: {
                props: {
                  className: 'summary',
                },
              },
            },
          }}
        >
          {summary}
        </Markdown>
      )}
      {highlights && (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}> {/* Use highlight as the key if it's unique */}
              <Markdown
                options={{
                  overrides: {
                    a: { component: LinkRenderer }, // Use custom link rendering in highlights
                  },
                }}
              >
                {highlight}
              </Markdown>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;
