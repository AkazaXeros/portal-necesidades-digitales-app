import { useEffect, useState } from "react";

import { getEntry } from "../services";

const useEntry = (entryId) => {
  const [entry, setEntry] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEntry = async () => {
      try {
        const data = await getEntry(entryId);
        setEntry(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadEntry();
  }, [entryId]);

  return { entry, loading, error };
};

export default useEntry;
