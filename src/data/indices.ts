
export interface IndexData {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const indices: IndexData[] = [
  {
    name: 'Nikkei 225',
    value: '38,500.50',
    change: '+150.25 (+0.39%)',
    isPositive: true,
  },
  {
    name: 'TOPIX',
    value: '2,740.10',
    change: '+10.50 (+0.38%)',
    isPositive: true,
  },
  {
    name: 'Dow Jones',
    value: '39,150.33',
    change: '-299.05 (-0.76%)',
    isPositive: false,
  },
  {
    name: 'S&P 500',
    value: '5,464.62',
    change: '-21.47 (-0.39%)',
    isPositive: false,
  },
  {
    name: 'NASDAQ',
    value: '17,721.59',
    change: '+220.84 (+1.26%)',
    isPositive: true,
  },
];
