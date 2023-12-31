// Importing hooks from React.
import { useEffect, useState } from 'react';

// Importing custom component.
import { getEntry } from '../services';

const useEntry = (entryId) => {
  const [entry, setEntry] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  return { entry, loading, error, setEntry };
};

export default useEntry;
