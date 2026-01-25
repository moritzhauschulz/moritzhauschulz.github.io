/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Jülich Supercomputing Center',
    position: 'Visiting Researcher',
    url: 'https://www.fz-juelich.de/en/jsc',
    startDate: '2025-07-15',
    endDate: '2025-09-30',
    summary:
      "Working in Martin Schultz' Earth System Data Exploration group. I contributed to the WeatherGenerator project.",
    highlights: [
      'Developed a diffusion based forecasting engine for the WeatherGenerator foundation model.',
      'Collaborated with scientists and engineers from the ECMWF',
      'Attended the 2025 workshop on Machine Learning for Earth System Modelling at the University of Bonn',
    ],
  },
  {
    name: 'Alexandria-Media',
    position: 'Technical Product Owner',
    url: '',
    startDate: '2022-10-01',
    endDate: '2023-09-30',
    summary:
      'First employee at Alexandria Media, a start-up supported by LSE Innovation, focusing on digitalizing media licensing through innovative smart contracts.',
    highlights: [
      'Shaped a shared vision within the engineering team, based on input from major UK and US studios',
      'Developed a modular framework to streamline the contracting workflow in the film industry in cooperation with major UK law firm',
      'Drove the implementation of a digital twin agreement that is both private and cryptographically verifiable to all parties based on the [Hedera](https://hedera.com/) platform',
      'Built and launched MVP for showcase to new clients and investors',
    ],
  },
  {
    name: 'Centre for Economic Performance (LSE)',
    position: 'Research Assistant',
    url: 'https://cep.lse.ac.uk',
    startDate: '2020-10-01',
    endDate: '2022-11-30',
    summary: 'See research experience above...',
    highlights: [],
  },
  {
    name: 'Kiel Institute',
    position: 'Research Intern',
    url: 'https://www.kielinstitut.de/',
    startDate: '2019-06-01',
    endDate: '2019-08-30',
    summary: 'See research experience above...',
    highlights: [],
  },
];

export default work;
