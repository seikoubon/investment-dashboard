
import type { NewsArticle } from '../data/news';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{article.source} - {article.publishedAt}</h6>
        <p className="card-text">{article.summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
