const skills = [
  {
    title: 'Spanish',
    competency: 4,
    category: ['Natural Languages'],
  },
  {
    title: 'French',
    competency: 1,
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
    competency: 5,
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
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'QGIS',
    competency: 4,
    category: ['Analytics'],
  },
  {
    title: 'Deep Learning',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'NLP',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Econometrics',
    competency: 4,
    category: ['Analytics'],
  },
  {
    title: 'Git/Github',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'HTML + CSS',
    competency: 1,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Graph Based Learning',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Quiskit',
    competency: 2,
    category: ['Quantum', 'Programming Languages'],
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#E69F00",
  "#56B4E9",
  "#009E73",
  "#F0E442",
  "#0072B2",
  "#D55E00",
  "#CC79A7",
  "#999999"
];

const skill_categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { skill_categories, skills };
