import { useEffect, useState } from "react";

import { getAllComments } from "../services";

const useComments = (entryId, token) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await getAllComments(entryId, token);
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadComments();
  }, [entryId, token]);

  return { comments, loading, error };
};

export default useComments;
