const grades = [
  {
    title: 'ST102 – Elementary Statistical Theory',
    competency: 93,
    category: ['LSE'],
  },
  {
    title: 'EC100 – Economics A',
    competency: 83,
    category: ['LSE'],
  },
  {
    title: 'MA103 – Introduction to Abstract Mathematics',
    competency: 76,
    category: ['LSE'],
  },
  {
    title: 'MA100 – Mathematical Methods',
    competency: 74,
    category: ['LSE'],
  },
  {
    title: 'EC210 – Macroeconomic Principles',
    competency: 89,
    category: ['LSE'],
  },
  {
    title: 'EC202 – Microeconomic Principles II',
    competency: 80,
    category: ['LSE'],
  },
  {
    title: 'EC221 – Principles of Econometrics',
    competency: 75,
    category: ['LSE'],
  },
  {
    title: 'MA203 – Real Analysis',
    competency: 95,
    category: ['LSE'],
  },
  {
    title: 'MA210 – Discrete Mathematics',
    competency: 100,
    category: ['LSE'],
  },
  {
    title: 'EC309 – Econometric Theory',
    competency: 83,
    category: ['LSE'],
  },
  {
    title: 'EC310 – Behavioural Economics',
    competency: 77,
    category: ['LSE'],
  },
  {
    title: 'EC331 – Quantitative Thesis',
    competency: 73,
    category: ['LSE'],
  },
  {
    title: 'MA211 – Algebra and Number Theory',
    competency: 88,
    category: ['LSE'],
  },
  {
    title: 'MA317 – Complex Analysis',
    competency: 51,
    category: ['LSE'],
  },
  {
    title: 'COMPSCI 61A – Structure and Interpretation of Computer Programs',
    competency: 13.20, // B+
    category: ['UC Berkeley'],
  },
  {
    title: 'MATH 110 – Linear Algebra',
    competency: 16.00, // A
    category: ['UC Berkeley'],
  },
  {
    title: 'MATH 126 – Introduction to Partial Differential Equations',
    competency: 'P', // Pass
    category: ['UC Berkeley'],
  },
  {
    title: 'MATH 202A – Topology & Analysis',
    competency: 12.00, // B
    category: ['UC Berkeley'],
  },
  {
    title: 'COMPSCI 61B – Data Structures',
    competency: 16.00, // A
    category: ['UC Berkeley'],
  },
  {
    title: 'MATH 114 – Abstract Algebra II',
    competency: 'P', // Pass
    category: ['UC Berkeley'],
  },
  {
    title: 'MATH 136 – Incompleteness and Undecidability',
    competency: 14.80, // A-
    category: ['UC Berkeley'],
  },
  // {
  //   title: 'MATH 214 – Differential Topology',
  //   competency: 'NP', // No Pass
  //   category: ['UC Berkeley'],
  // },
  {
    title: 'COMP70005 – Complexity',
    competency: 84.0,
    category: ['Imperial'],
  },
  {
    title: 'COMP70015 – Mathematics for Machine Learning',
    competency: 83.9,
    category: ['Imperial'],
  },
  {
    title: 'COMP70022 – Scalable Systems and Data',
    competency: 73.0,
    category: ['Imperial'],
  },
  {
    title: 'COMP70028 – Reinforcement Learning',
    competency: 74.19,
    category: ['Imperial'],
  },
  {
    title: 'COMP70007 – Computational Optimisation',
    competency: 62.0,
    category: ['Imperial'],
  },
  {
    title: 'COMP70010 – Deep Learning',
    competency: 82.16,
    category: ['Imperial'],
  },
  // {
  //   title: 'COMP70016 – Natural Language Processing',
  //   competency: 'Absent',
  //   category: ['Imperial'],
  // },
  {
    title: 'COMP70021 – Quantum Computing',
    competency: 84.13,
    category: ['Imperial'],
  },
  {
    title: 'COMP70105 – Deep Graph-Based Learning',
    competency: 82.91,
    category: ['Imperial'],
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

const grade_categories = [
  { name: 'LSE', color: '#AE1C28', maxScale: 100 },
  { name: 'UC Berkeley', color: '#FDB515', maxScale: 16 },
  { name: 'Imperial', color: '#002147', maxScale: 100 },
];

export { grade_categories, grades };
