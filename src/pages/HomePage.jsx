import Categories from '../components/Categories/Categories';
import useTitle from '../hooks/useTitle';

const HomePage = () => {
  useTitle('Wrench');
  return <Categories />;
};
export default HomePage;
