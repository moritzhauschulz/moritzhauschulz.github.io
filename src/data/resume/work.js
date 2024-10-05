/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Alexandria-Media',
    position: 'Techincal Product Owner',
    url: 'https://alexandria-media.org/',
    startDate: '2022-10-01',
    endDate: '2023-09-30',
    summary: 'First employee at Alexandria Media, a start-up supported by LSE Innovation, focusing on digitalizing media licensing through innovative smart-contracts.',
    highlights: [
      'Shaped a shared vision within the engineering team, based on input from major UK and US studios',
      'Developed a modular framework to streamline the contracting workflow in the film industry in cooperation with major UK law firm',
      `Drove the implementation of a digital twin agreement that is both private and cryptographically verifiable to all parties based on the <a href="https://hedera.com/">Hedera</a> platform`,
      'Built and launched MVP for showcase to new clients and investors'
    ],
  },
  {
    name: 'Centre for Economic Performance (LSE)',
    position: 'Research Assistant',
    url: 'https://cep.lse.ac.uk/',
    startDate: '2020-10-01',
    endDate: '2022-09-30',
    summary: `Data analytics for the policing and crime research group (PI: Tom Kirchmaier).`,
    highlights: [
      'Proposal for code classification architecture based on NLP techniques for EPSRC research grant application',
      'Analysis of statistical methods used for crime data by UK authorities, reporting to HMICFRS',
      'Development of kernel models for the impact of bombs on housing stock in Python and QGIS',
      'Econometric analysis of impact of different social housing types on crime (project available on <a href=https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3521766>SSRN </a>)',
      'Econometric analysis on crime trends during Covid-19 pandemic (project available on <a href=https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3700329>SSRN </a>)'
    ],
  },
  {
    name: 'Kiel Institute (IfW)',
    position: 'Research Intern',
    url: 'https://www.ifw-kiel.de/',
    startDate: '2019-06-01',
    endDate: '2019-08-30',
    summary: `Department of International Finance and Global Governance (PI: Christoph Trebesch).`,
    highlights: [
      'Development of a strategy to compile comprehensive historic sovereign debt data from various sources including Thomson Reuters and historic London Stock Exchange year books',
      'Implementation of data pre-processing pipeline for cleaning and assembling data from various sources'
,
    ],
  },
  
];

export default work;
