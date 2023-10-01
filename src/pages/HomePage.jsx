// Importing custom component.
import Home from '../components/Home/Home';

// Importing custom hooks component.
import useTitle from '../hooks/useTitle';

const HomePage = () => {
  useTitle('Wrench');
  return <Home />;
};
export default HomePage;
