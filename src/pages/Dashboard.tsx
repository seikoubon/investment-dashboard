
import IndexCard from '../components/IndexCard';
import { indices } from '../data/indices';

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-4">Market Overview</h1>
      <div className="row">
        {indices.map(index => (
          <div key={index.name} className="col-md-4 col-lg-3 mb-4">
            <IndexCard index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
