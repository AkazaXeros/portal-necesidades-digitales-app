import { allEntries } from "./AllEntries.module.css";
import Entry from "./Entry";

import { useEffect, useState } from "react";

const AllEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:8000/entries");
      const data = await res.json();
      setEntries(data.data.entries);
      console.log(entries);
    };
    loadData();
  }, []);

  return (
    <div>
      <ul className={allEntries}>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEntries;
