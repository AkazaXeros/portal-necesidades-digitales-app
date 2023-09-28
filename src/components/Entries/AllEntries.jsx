// Importing CSS
import useEntries from "../../hooks/useEntries";
import { allEntries, card } from "./AllEntries.module.css";

// Importing React component
import { Helmet } from "react-helmet";

import Entry from "./Entry";

// Importing Material UI components
import { Alert, CircularProgress } from "@mui/material";

// Component that displays all service entries
const AllEntries = ({ onProfile }) => {
  const { entries, loading, error } = useEntries();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">An error has occurred...</Alert>;

  return entries.length ? (
    <>
      <Helmet>
        <title>Our services</title>
      </Helmet>

      <ul className={allEntries}>
        {entries.map((entry) => (
          <li key={entry.id} className={card}>
            <Entry entry={entry} onProfile={onProfile} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <Alert severity="info">There are no entries yet...</Alert>
  );
};

export default AllEntries;
