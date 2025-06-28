
import type { IndexData } from '../data/indices';

interface IndexCardProps {
  index: IndexData;
}

const IndexCard: React.FC<IndexCardProps> = ({ index }) => {
  const changeColor = index.isPositive ? 'text-success' : 'text-danger';

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{index.name}</h5>
        <h3 className="card-text">{index.value}</h3>
        <p className={`card-text ${changeColor}`}>{index.change}</p>
      </div>
    </div>
  );
};

export default IndexCard;
