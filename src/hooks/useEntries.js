import { useEffect, useState } from "react";

import { getAllEntries } from "../services";

const useEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await getAllEntries();
        setEntries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadEntries();
  }, []);

  return { entries, loading, error };
};

export default useEntries;
