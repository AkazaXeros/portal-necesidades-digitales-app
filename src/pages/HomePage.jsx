// Importing React component
import { Helmet } from "react-helmet";

import Categories from "../components/Categories/Categories";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Wrench</title>
      </Helmet>
      <Categories />
    </>
  );
};
export default HomePage;
