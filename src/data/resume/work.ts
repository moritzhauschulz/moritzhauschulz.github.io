/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url?: string;
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
    name: 'Alexandria-Media Ltd.',
    position: 'Technical Product Owner',
    startDate: '2022-10-01',
    endDate: '2023-09-30',
    summary:
      'First employee at Alexandria Media, a start-up supported by LSE Innovation, focusing on digitalizing media licensing through innovative smart contracts.',
    highlights: [
      'Shaped a shared vision within the engineering team, based on input from major UK and US studios',
      'Developed a modular framework to streamline the contracting workflow in the film industry in cooperation with major UK law firm',
      'Drove the implementation of a digital twin agreement that is both private and cryptographically verifiable to all parties based on the Hedera platform',
      'Built and launched MVP for showcase to new clients and investors',
    ],
  },
  {
    name: 'Centre for Economic Performance (LSE)',
    position: 'Research Assistant',
    url: 'https://cep.lse.ac.uk',
    startDate: '2020-10-01',
    endDate: '2022-11-30',
    summary:
      'Supported multiple research projects involving machine learning, econometrics, and geo-spatial modeling.',
    highlights: [
      'Developed an LSTM-based classifier to detect fraud schemes from smart contracts on decentralized networks.',
      'Led a project on statistical methods used by the UK Government to assess police performance, producing an authored report.',
      'Built geo-spatial models in Python and QGIS to simulate the impact of WWII bombs on housing stock in London.',
      'Conducted instrumental variable regressions to identify the causal effect of social housing on crime rates.',
    ],
  },
  {
    name: 'Kiel Institute',
    position: 'Research Intern',
    url: 'https://www.kielinstitut.de/',
    startDate: '2019-06-01',
    endDate: '2019-08-30',
        summary: 'Worked on consolidating and analyzing sovereign debt data using automated pipelines.',
    highlights: [
      'Implemented a pre-processing pipeline for sovereign debt data from Thomson Reuters and Bloomberg.',
      'Automated data visualization strategies to identify anomalies in time series of debt volume.',
      'Presented a strategy for further consolidation of databases and introduced new team members to the codebase.',
    ],
  },
];

export default work;
