import React from 'react';
import PropTypes from 'prop-types';

const Other = ({ data, last }) => (
  <li className="other-container">
    <h4 className="other-name">{data.title}:</h4>
    <p
      className="other-description"
      dangerouslySetInnerHTML={{ __html: data.description }} // Render description as HTML
    />
    {/* Uncomment this block if you want to add a dot separator */}
    {/* {!last && (
      <div className="other-dot">
        <p className="other-name"> &#8226;</p>
      </div>
    )} */}
  </li>
);

Other.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Other.defaultProps = {
  last: false,
};

export default Other;