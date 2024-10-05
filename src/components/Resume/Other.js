import React from 'react';
import PropTypes from 'prop-types';

import Other from './Other/Other';

const getRows = (others) => others
  .sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
  })
  .map((other, idx) => (
    <Other
      data={other}
      key={other.title}
      last={idx === others.length - 1}
    />
  ));

const Others = ({ data }) => (
  <div className="others">
    <div className="link-to" id="others" />
    <div className="title">
      <h3>Other Activities and Awards</h3>
    </div>
    <ul className="other-list">{getRows(data)}</ul>
  </div>
);

Others.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Others.defaultProps = {
  data: [],
};

export default Others;
