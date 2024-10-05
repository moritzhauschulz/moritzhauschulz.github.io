import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Grades/CategoryButton';
import GradeBar from './Grades/GradeBar';

const categories = [
  { name: 'LSE', color: '#FF5733', maxScale: 100 },
  { name: 'UC Berkeley', color: '#3375FF', maxScale: 16 },
  { name: 'Imperial', color: '#33FF57', maxScale: 100 },
];
const Grades = ({ grades, categories }) => {
  const initialButtons = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {},
    );
    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const isNumeric = (value) => !isNaN(value) && value !== null && value !== undefined;

  const getRows = () => {
    // Search for the active categories
    const actCat = Object.keys(buttons).reduce(
      (cat, key) => (buttons[key] ? key : cat),
      'All',
    );

    const comparator = (a, b) => {
      const aIsNumeric = isNumeric(a.competency);
      const bIsNumeric = isNumeric(b.competency);

      // Non-numeric grades go to the bottom
      if (!aIsNumeric && bIsNumeric) return 1;
      if (aIsNumeric && !bIsNumeric) return -1;

      // For numeric grades, sort by percentage
      if (aIsNumeric && bIsNumeric) {
        // Find the category and maxScale for each grade
        const aCategory = categories.find((cat) => a.category.includes(cat.name));
        const bCategory = categories.find((cat) => b.category.includes(cat.name));
        const aMaxScale = aCategory ? aCategory.maxScale : 100;
        const bMaxScale = bCategory ? bCategory.maxScale : 100;

        // Calculate the percentage for each grade
        const aPercentage = (a.competency / aMaxScale) * 100;
        const bPercentage = (b.competency / bMaxScale) * 100;

        if (aPercentage > bPercentage) return -1;
        if (aPercentage < bPercentage) return 1;
      }

      // Sort non-numeric grades by title as a fallback
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;

      return 0;
    };

    return grades
      .sort(comparator)
      .filter((grade) => actCat === 'All' || grade.category.includes(actCat))
      .map((grade) => {
        // Find the maxScale for the grade's category
        const gradeCategory = categories.find((cat) => grade.category.includes(cat.name));
        const maxScale = gradeCategory ? gradeCategory.maxScale : 100; // Default to 100 if not found

        return (
          <GradeBar
            categories={categories}
            data={grade}
            key={grade.title}
            maxScale={maxScale}
          />
        );
      });
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="grades">
      <div className="link-to" id="grades" />
      <div className="title">
        <h3>Grades</h3>
        <p>
          Some courses and grades I have collected over the years.
        </p>
      </div>
      <div className="skill-button-container">{getButtons()}</div>
      <div className="skill-row-container">{getRows()}</div>
    </div>
  );
};




Grades.propTypes = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

Grades.defaultProps = {
  grades: [],
  categories: [],
};

export default Grades;
