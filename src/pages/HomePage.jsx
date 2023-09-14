import { Alert, CircularProgress } from "@mui/material";

import AllEntries from "../components/Entries/AllEntries";
import useEntries from "../hooks/useEntries";

const HomePage = () => {
  const { entries, loading, error } = useEntries();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">An error has occurred...</Alert>;

  return (
    <>
      <AllEntries entries={entries} />
    </>
  );
};
export default HomePage;
