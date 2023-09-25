import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importing React component
import { Helmet } from 'react-helmet';

import { Alert, CircularProgress } from '@mui/material';

import { getUserService } from '../services';
import UserProfile from '../components/UserProfile/UserProfile';

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

  if (error) return <Alert severity="error">{error}</Alert>;
  if (loading) return <CircularProgress />;

  return publicUser ? (
    <>
      <Helmet>
        <title>{publicUser.userName}</title>
      </Helmet>
      <UserProfile appUser={publicUser} onUpdateProfile={setPublicUser} />
    </>
  ) : null;
};

export default UserProfilePage;
