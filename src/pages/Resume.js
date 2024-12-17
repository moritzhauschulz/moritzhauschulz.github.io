import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Research from '../components/Resume/Research';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Grades from '../components/Resume/Grades';
import Courses from '../components/Resume/Other';
import References from '../components/Resume/References';

import courses from '../data/resume/other';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import research from '../data/resume/research';
import { skills, SkillCategories } from '../data/resume/skills';
import { grades, GradeCategories } from '../data/resume/grades';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Research: () => <Research data={research} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={SkillCategories} />,
  Grades: () => <Grades grades={grades} categories={GradeCategories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Moritz' Resume. LSE, Berkeley, Imperial, Oxford."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
