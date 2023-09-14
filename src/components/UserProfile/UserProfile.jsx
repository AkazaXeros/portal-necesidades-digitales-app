// import { userCard } from "./UserProfile.module.css";
import AllEntries from "../Entries/AllEntries";
import useEntries from "../../hooks/useEntries";
import User from "../User/User";

import { CircularProgress } from "@mui/material";

const UserProfile = ({ appUser }) => {
  const { entries } = useEntries();

  const userEntries =
    entries.filter((entry) => entry.userId === parseInt(appUser.id)) || [];

  return (
    <div>
      <User appUser={appUser} />

      {!userEntries.length ? (
        <CircularProgress />
      ) : (
        <AllEntries entries={userEntries} />
      )}
    </div>
  );
};
export default UserProfile;
