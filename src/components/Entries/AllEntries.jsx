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
    <p>There are no entries yet...</p>
  );
};

export default AllEntries;
