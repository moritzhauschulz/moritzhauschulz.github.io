import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => {
  // Check if the URL is external or a PDF, and apply proper link handling
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
      {summary ? (
        <Markdown
          options={{
            overrides: {
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
      ) : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}> {/* Use highlight as the key if it's unique */}
              <Markdown>{highlight}</Markdown>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
