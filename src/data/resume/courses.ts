export interface Course {
  title: string;
  number: string;
  university: string;
}

const courses: Course[] = [
  { title: 'Elementary Statistical Theory', number: 'ST102', university: 'LSE' },
  { title: 'Economics A', number: 'EC100', university: 'LSE' },
  { title: 'Introduction to Abstract Mathematics', number: 'MA103', university: 'LSE' },
  { title: 'Mathematical Methods', number: 'MA100', university: 'LSE' },
  { title: 'Macroeconomic Principles', number: 'EC210', university: 'LSE' },
  { title: 'Microeconomic Principles II', number: 'EC202', university: 'LSE' },
  { title: 'Principles of Econometrics', number: 'EC221', university: 'LSE' },
  { title: 'Real Analysis', number: 'MA203', university: 'LSE' },
  { title: 'Discrete Mathematics', number: 'MA210', university: 'LSE' },
  { title: 'Econometric Theory', number: 'EC309', university: 'LSE' },
  { title: 'Behavioural Economics', number: 'EC310', university: 'LSE' },
  { title: 'Quantitative Thesis', number: 'EC331', university: 'LSE' },
  { title: 'Algebra and Number Theory', number: 'MA211', university: 'LSE' },
  { title: 'Complex Analysis', number: 'MA317', university: 'LSE' },

  {
    title: 'Structure and Interpretation of Computer Programs',
    number: 'COMPSCI 61A',
    university: 'Berkeley',
  },
  { title: 'Linear Algebra', number: 'MATH 110', university: 'Berkeley' },
  {
    title: 'Introduction to Partial Differential Equations',
    number: 'MATH 126',
    university: 'Berkeley',
  },
  { title: 'Topology & Analysis', number: 'MATH 202A', university: 'Berkeley' },
  { title: 'Data Structures', number: 'COMPSCI 61B', university: 'Berkeley' },
  { title: 'Abstract Algebra II', number: 'MATH 114', university: 'Berkeley' },
  { title: 'Incompleteness and Undecidability', number: 'MATH 136', university: 'Berkeley' },

  { title: 'Complexity', number: 'COMP70005', university: 'Imperial' },
  { title: 'Computational Optimisation', number: 'COMP70007', university: 'Imperial' },
  { title: 'Deep Graph-Based Learning', number: 'COMP70105', university: 'Imperial' },
  { title: 'Deep Learning', number: 'COMP70010', university: 'Imperial' },
  {
    title: 'MSc Advanced Computing Individual Project',
    number: 'COMP70029',
    university: 'Imperial',
  },
  { title: 'Mathematics for Machine Learning', number: 'COMP70015', university: 'Imperial' },
  { title: 'Natural Language Processing', number: 'COMP70016', university: 'Imperial' },
  { title: 'Quantum Computing', number: 'COMP70021', university: 'Imperial' },
  { title: 'Reinforcement Learning', number: 'COMP70028', university: 'Imperial' },
  { title: 'Scalable Systems and Data', number: 'COMP70022', university: 'Imperial' },

  { title: 'Computational Algebraic Topology', number: 'C3.9', university: 'Oxford' },
  {
    title: 'Dissertation on a Mathematical Topic (double unit)',
    number: 'CCD',
    university: 'Oxford',
  },
  {
    title: 'Finite Element Methods for Partial Differential Equations',
    number: 'C6.4',
    university: 'Oxford',
  },
  {
    title: 'Functional Analytic Methods for Partial Differential Equations',
    number: 'C4.3',
    university: 'Oxford',
  },
  {
    title: 'Stochastic Analysis and Partial Differential Equations',
    number: 'C8.2',
    university: 'Oxford',
  },
  { title: 'Stochastic Differential Equations', number: 'C8.1', university: 'Oxford' },
  { title: 'Theories of Deep Learning', number: 'C6.5', university: 'Oxford' },
];

export default courses;
