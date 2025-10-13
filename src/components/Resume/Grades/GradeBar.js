import React from 'react';
import PropTypes from 'prop-types';

const GradeBar = ({ data, categories, maxScale = 100 }) => {
  const { category, competency, title } = data;

  // Find the background color for the title
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  // Determine if the grade is numeric
  const isNumericGrade = typeof competency === 'number' && !Number.isNaN(competency);

  // Calculate the bar width
  const barWidth = isNumericGrade ? (competency / maxScale) * 100 : 100;

  // Determine the class for the bar
  const barClass = isNumericGrade ? 'numeric-grade' : 'non-numeric-grade';

  const barStyle = {
    ...titleStyle,
    width: `${barWidth}%`,
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}>
        <span>{title}</span>
      </div>
      <div className={`skillbar-bar ${barClass}`} style={barStyle} />
      <div className="skill-bar-percent">
        {isNumericGrade ? `${competency} / ${maxScale}` : competency}
      </div>
    </div>
  );
};

GradeBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  maxScale: PropTypes.number,
};

GradeBar.defaultProps = {
  categories: [],
  maxScale: 100,
};

export default GradeBar;
