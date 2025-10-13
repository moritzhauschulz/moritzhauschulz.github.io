import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Moritz' projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A selection of projects that I have had the time to make available online.
            More to be added soon.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title}>
          {project.link.endsWith('.pdf') ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            <Link to={project.link}>{project.title}</Link>
          )}
        </Cell>
      ))}
    </article>
  </Main>
);

export default Projects;
