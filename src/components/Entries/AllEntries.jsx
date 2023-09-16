import { Alert } from '@mui/material';

import { allEntries } from './AllEntries.module.css';

import Entry from './Entry';

const AllEntries = ({ entries }) => {
  return entries.length ? (
    <ul className={allEntries}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <Entry entry={entry} />
        </li>
      ))}
    </ul>
  ) : (
    <Alert severity="info">There are no entries yet...</Alert>
  );
};

export default AllEntries;
