const grades = [
  {
    title: 'Spanish',
    competency: 4,
    category: ['Natural Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Natural Languages'],
  },
  {
    title: 'German',
    competency: 5,
    category: ['Natural Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Solidity',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Deep Learning',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'NLP',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Dagster',
    competency: 2,
    category: ['Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Mypy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const grade_categories = [...new Set(grades.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { grade_categories, grades };
