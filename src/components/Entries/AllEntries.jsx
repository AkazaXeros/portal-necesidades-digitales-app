// Importing CSS
import { allEntries, notFound } from './AllEntries.module.css';

import Entry from './Entry';

// Importing Material UI components
import { Alert, CircularProgress } from '@mui/material';

// Component that displays all service entries
const AllEntries = ({ entries, onProfile, error, loading }) => {
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">An error has occurred...</Alert>;

  if (entries.length === 0)
    return (
      <Alert severity="info" className={notFound}>
        No services found...
      </Alert>
    );

  return entries.length ? (
    <ul className={allEntries}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <Entry entry={entry} onProfile={onProfile} />
        </li>
      ))}
    </ul>
  ) : (
    <Alert severity="info">There are no entries yet...</Alert>
  );
};

export default AllEntries;
