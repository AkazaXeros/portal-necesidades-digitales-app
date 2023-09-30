import Home from "../components/Home/Home";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Wrench");
  return <Home />;
};
export default HomePage;
