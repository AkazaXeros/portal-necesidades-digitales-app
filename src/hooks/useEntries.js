import { useEffect, useState } from "react";

const useEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const res = await fetch("http://localhost:8000/entries");
        const data = await res.json();
        setEntries(data.data.entries);
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
