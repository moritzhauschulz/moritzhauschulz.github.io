import React from 'react';

import dayjs from 'dayjs';

import type { Project } from '@/data/projects';

import styles from './Cell.module.css';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className={styles.projectBox}>
    <article>
      <header>
        <h3 className={styles.title}>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className={styles.description}>
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
