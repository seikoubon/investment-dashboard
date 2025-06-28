
export interface NewsArticle {
  id: number;
  title: string;
  source: string;
  publishedAt: string;
  summary: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Nikkei 225 closes higher on tech gains',
    source: 'Nikkei News',
    publishedAt: '2025-06-28',
    summary: 'Japanese stocks ended higher on Friday, with the Nikkei 225 benchmark index rising on the back of strong performances from technology shares...',
  },
  {
    id: 2,
    title: 'Federal Reserve hints at steady interest rates',
    source: 'Bloomberg',
    publishedAt: '2025-06-28',
    summary: 'The US Federal Reserve has indicated that it will likely keep interest rates unchanged in its upcoming meeting, citing moderate economic growth...',
  },
  {
    id: 3,
    title: 'Oil prices fall amid concerns of slowing global demand',
    source: 'Reuters',
    publishedAt: '2025-06-27',
    summary: 'Crude oil prices dropped on Thursday as investors grew concerned about a potential slowdown in global energy demand, particularly from China...',
  },
];
