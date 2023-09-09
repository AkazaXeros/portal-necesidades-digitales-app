import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserService } from "../services";
import UserProfile from "../components/UserProfile/UserProfile";

const UserProfilePage = () => {
  const [error, setError] = useState();
  const [publicUser, setPublicUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUserService(id);
        setPublicUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading user...</p>;

  return publicUser ? <UserProfile appUser={publicUser} /> : null;
};

export default UserProfilePage;
