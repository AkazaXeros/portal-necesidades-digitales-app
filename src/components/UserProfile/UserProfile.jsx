// Importing hook from React.
import { useState } from 'react';

// Importing custom hooks component.
import useEntries from '../../hooks/useEntries';

// Importing custom components.
import AllEntries from '../Entries/AllEntries';
import EditUserProfile from './EditUserProfile';
import FormModal from '../UI/FormModal';
import User from '../User/User';

// Importing CSS.
import { userProfile } from './UserProfile.module.css';

// Importing Material UI component.
import { CircularProgress } from '@mui/material';

const UserProfile = ({ appUser, onUpdateProfile }) => {
  const { entries, loading } = useEntries();

  const [modalIsOpened, setModalIsOpened] = useState(false);

  const userEntries =
    entries.filter((entry) => entry.userId === parseInt(appUser.id)) || [];

  // -------------Handler------------- //
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
        <CircularProgress className="circularLoading" />
      ) : (
        <AllEntries entries={userEntries} onProfile={true} />
      )}
    </div>
  );
};
export default UserProfile;
