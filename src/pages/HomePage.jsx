import { Alert, CircularProgress } from '@mui/material';

// Importing React component
import { Helmet } from 'react-helmet';

import AllEntries from '../components/Entries/AllEntries';
import useEntries from '../hooks/useEntries';
import Categories from '../components/Categories/Categories';

const HomePage = () => {
  const { entries, loading, error } = useEntries();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">An error has occurred...</Alert>;

  return (
    <>
      <Helmet>
        <title>Wrench</title>
      </Helmet>
      <h1>Find the <i>freelance</i> service you were looking for</h1>
      <Categories />
      <AllEntries entries={entries} />
    </>
  );
};
export default HomePage;
