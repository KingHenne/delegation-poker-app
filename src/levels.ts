export interface LevelInfo {
  backgroundColor: string;
  highlightColor?: string;
  name: string;
  description: string;
}

export const levels: LevelInfo[] = [
  {
    backgroundColor: 'hsl(353, 100%, 92%)',
    highlightColor: 'hsl(353, 96%, 85%)',
    name: 'Tell',
    description:
      'Make the decision. You might explain your motivation. No discussion.',
  },
  {
    backgroundColor: 'hsl(25, 96%, 91%)',
    highlightColor: 'hsl(25, 93%, 84%)',
    name: 'Sell',
    description:
      'Make the decision. Try to convince others and help them feel involved.',
  },
  {
    backgroundColor: 'hsl(57, 66%, 88%)',
    highlightColor: 'hsl(57, 62%, 80%)',
    name: 'Consult',
    description: 'Ask for input, take input into considaration, then decide.',
  },
  {
    backgroundColor: 'hsl(91, 91%, 91%)',
    highlightColor: 'hsl(91, 88%, 84%)',
    name: 'Agree',
    description: 'Discuss until you reach consensus.',
  },
  {
    backgroundColor: 'hsl(149, 91%, 91%)',
    highlightColor: 'hsl(149, 88%, 84%)',
    name: 'Advise',
    description: 'Offer input, let others decide.',
  },
  {
    backgroundColor: 'hsl(183, 66%, 88%)',
    highlightColor: 'hsl(183, 64%, 80%)',
    name: 'Inquire',
    description:
      'Leave decision to others, then ask them to convince/inform you. It’s their decision.',
  },
  {
    backgroundColor: 'hsl(213, 96%, 91%)',
    highlightColor: 'hsl(213, 93%, 84%)',
    name: 'Delegate',
    description:
      'Leave decision completely to others. Don’t want to know anything about it.',
  },
];
