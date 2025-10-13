export interface Research {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

const research: Research[] = [
  {
    name: 'University of Oxford',
    position: 'MSc Thesis',
    startDate: '2024-10-01',
    endDate: '2025-05-30',
    summary:
      'Research focused on structure-preserving operator learning for partial differential equations (PDEs).',
    highlights: [
      'Implemented DeepONet and FNO architectures to learn solution operators for harmonic oscillators and Schrödinger equations, exploring both data-driven and physics-informed loss functions.',
      'Augmented neural architectures to ensure energy conservation through branch orthogonalization and trunk normalization in DeepONet and regularization terms in FNO loss.',
      'Reviewed literature on PINN  s, operator learning, and numerical baselines such as finite element methods.',
    ],
  },
  {
    name: 'Imperial College London',
    position: 'MSc Thesis',
    startDate: '2024-04-01',
    endDate: '2024-09-30',
    summary:
      'Developed novel methods for training energy-based models (EBMs) using discrete flow sampling techniques.',
    highlights: [
      'Developed a data-free regression-based discrete flow sampler, training discrete diffusion with importance sampling and a learned proposal distribution.',
      'Deployed the novel sampler to train EBMs, achieving state-of-the-art results on synthetic and discrete image data.',
      'Proved analytically the validity of the regression loss and convergence of the EBM training algorithm.',
      'Surveyed state-of-the-art methods for sampling discrete distributions, including MCMC and learned samplers such as GFlowNet.',
    ],
  },
  {
    name: 'Centre for Economic Performance (LSE)',
    position: 'Research Assistant',
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
    name: 'London School of Economics',
    position: 'BSc Thesis',
    startDate: '2020-09-01',
    endDate: '2021-07-30',
    summary:
      'Empirical research on monetary policy in the Eurozone, focusing on the sovereign commitment channel.',
    highlights: [
      'Developed a framework for analyzing the differential impact of centralized monetary policy on sovereign states in monetary unions.',
      'Empirically evidenced the existence of a “Sovereign Commitment” causal channel in Eurozone monetary policy.',
      'Devised a quantitative identification strategy based on factor analysis of yield curves and constraint optimization.',
    ],
  },
  {
    name: 'Kiel Institute',
    position: 'Research Intern',
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

export default research;
