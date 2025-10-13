import React from 'react';

import Job from './Experience/Job';

interface ResearchJob {
  name: string;
  position: string;
  url: string;
  startDate: string;
  [key: string]: string;
}

const data: ResearchJob[] = [];

const Research: React.FC = () => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research Experience</h3>
    </div>
    {data.map((job) => (
      <Job data={job} key={`${job.name}-${job.position}`} />
    ))}
  </div>
);

export default Research;
