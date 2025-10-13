import React from 'react';

import type { Course as CourseType } from '@/data/resume/courses';

import styles from './Courses/Courses.module.css';

interface CoursesProps {
  data: CourseType[];
}

const groupByUniversity = (courses: CourseType[]) => {
  const grouped = courses.reduce(
    (acc, course) => {
      acc[course.university] = acc[course.university] || [];
      acc[course.university].push(course);
      return acc;
    },
    {} as Record<string, CourseType[]>,
  );

  // Sort courses within each university
  Object.keys(grouped).forEach((university) => {
    grouped[university].sort((a, b) => (a.number > b.number ? 1 : -1));
  });

  return grouped;
};

const Courses: React.FC<CoursesProps> = ({ data }) => {
  const groupedCourses = groupByUniversity(data);

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Selected Courses</h3>
      </div>
      {Object.entries(groupedCourses).map(([university, courses]) => (
        <div key={university} className={styles.universityBox}>
          <h4 className={styles.universityTitle}>{university}</h4>
          <ul className={styles.courseList}>
            {courses.map((course) => (
              <li key={course.number || course.title} className={styles.courseItem}>
                <span className={styles.courseNumber}>
                  {course.number ? `${course.number}:` : ''}
                </span>
                <span className={styles.courseTitle}>{course.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Courses;
