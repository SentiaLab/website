export interface Entry {
  title: string;
  text: string;
}

export const steps: Entry[] = [
  {
    title: 'Assess',
    text: 'We review the problem, the data you have and where the system must run, and agree on what success means.',
  },
  {
    title: 'Prototype',
    text: 'We train a first model and run it on the target platform early, so feasibility is proven in the real environment.',
  },
  {
    title: 'Optimize',
    text: 'We tune the model and the pipeline for the target platform until accuracy, latency and cost meet the targets.',
  },
  {
    title: 'Deploy',
    text: 'We deliver production software with CI/CD and tests, and hand it over to your team.',
  },
];

export const engagements: Entry[] = [
  {
    title: 'Fixed-scope project',
    text: 'A defined system, designed, built and delivered end to end.',
  },
  {
    title: 'Audit and optimization',
    text: 'A review of an existing model or pipeline, with the changes needed to make it faster, cheaper to run or deployable on the target platform.',
  },
  {
    title: 'Embedded engineering',
    text: 'An engineer working inside your team for a period, on your roadmap.',
  },
];

export const clients: Entry[] = [
  {
    title: 'Product companies',
    text: 'Adding a vision or AI feature to a hardware or software product.',
  },
  {
    title: 'Infrastructure and industrial operators',
    text: 'Systems that have to run in the field: tolling, traffic, factories.',
  },
  {
    title: 'Startups',
    text: 'Teams without ML engineers that need the whole pipeline built.',
  },
  {
    title: 'Systems integrators',
    text: 'Partners who need the vision or embedded part of a larger delivery.',
  },
];
