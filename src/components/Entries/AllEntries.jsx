import { allEntries } from "./AllEntries.module.css";

import { Link } from "react-router-dom";

import Entry from "./Entry";

const AllEntries = ({ entries }) => {
  return entries.length ? (
    <ul className={allEntries}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <Link to={`/entries/${entry.id}`}>
            <Entry entry={entry} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no entries yet...</p>
  );
};

export default AllEntries;
