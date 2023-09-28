// Importing React component
import { Helmet } from "react-helmet";

const HomePage = () => {
  // if (loading) return <CircularProgress />;
  // if (error) return <Alert severity="error">An error has occurred...</Alert>;

  return (
    <>
      <Helmet>
        <title>Wrench</title>
      </Helmet>
    </>
  );
};
export default HomePage;
