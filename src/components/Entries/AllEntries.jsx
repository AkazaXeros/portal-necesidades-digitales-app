// Importing custom component.
import Entry from './Entry';

// Importing CSS.
import { allEntries } from './AllEntries.module.css';

// Importing Material UI components.
import { Alert, CircularProgress } from '@mui/material';

const AllEntries = ({ entries, onProfile, error, loading }) => {
  if (loading) return <CircularProgress className="circularLoading" />;
  if (error)
    return (
      <Alert severity="error" className="notFound">
        An error has occurred...
      </Alert>
    );

  if (entries.length === 0)
    return (
      <Alert severity="info" className="notFound">
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
