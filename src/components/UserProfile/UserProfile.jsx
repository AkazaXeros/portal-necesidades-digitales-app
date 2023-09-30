import { userProfile } from './UserProfile.module.css';
import AllEntries from '../Entries/AllEntries';
import useEntries from '../../hooks/useEntries';

import User from '../User/User';
import FormModal from '../UI/FormModal';

import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import EditUserProfile from './EditUserProfile';

const UserProfile = ({ appUser, onUpdateProfile }) => {
  const { entries, loading } = useEntries();

  const [modalIsOpened, setModalIsOpened] = useState(false);

  const userEntries =
    entries.filter((entry) => entry.userId === parseInt(appUser.id)) || [];

  const editHandler = () => {
    setModalIsOpened((prevState) => !prevState);
  };

  return (
    <div className={userProfile}>
      {modalIsOpened && (
        <div>
          <FormModal onEdit={editHandler}>
            <EditUserProfile
              onCancel={editHandler}
              onUpdateProfile={onUpdateProfile}
            />
          </FormModal>
        </div>
      )}
      <User appUser={appUser} onEdit={editHandler} />

      {loading ? (
        <CircularProgress />
      ) : (
        <AllEntries entries={userEntries} onProfile={true} />
      )}
    </div>
  );
};
export default UserProfile;
