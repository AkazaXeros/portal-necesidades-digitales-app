import { Alert, CircularProgress } from '@mui/material';

// Importing React component
import { Helmet } from 'react-helmet';

import AllEntries from '../components/Entries/AllEntries';
import useEntries from '../hooks/useEntries';

const HomePage = () => {
  const { entries, loading, error } = useEntries();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">An error has occurred...</Alert>;

  return (
    <>
      <Helmet>
        <title>Wrench</title>
      </Helmet>
      <AllEntries entries={entries} />
    </>
  );
};
export default HomePage;
