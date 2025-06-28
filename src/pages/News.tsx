
import NewsCard from '../components/NewsCard';
import { newsArticles } from '../data/news';

const News = () => {
  return (
    <div>
      <h1 className="mb-4">Financial News</h1>
      <div className="row">
        {newsArticles.map(article => (
          <div key={article.id} className="col-md-12">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
