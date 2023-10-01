// Importing component from Material UI.
import { Avatar } from '@mui/material';

const Icon = ({ avatar }) => {
  return (
    <section className="avatarImg">
      <Avatar
        src={avatar && `${import.meta.env.VITE_BACKEND_URL}/${avatar}`}
        alt="avatar"
        className="avatarImg"
      />
    </section>
  );
};
export default Icon;
