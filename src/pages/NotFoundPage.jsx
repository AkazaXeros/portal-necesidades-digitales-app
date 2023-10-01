// Importing component from React.
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
