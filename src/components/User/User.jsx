import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

import { useUser } from '../../context/UserContext';

const User = ({ appUser }) => {
  const { user } = useUser();
  return (
    <Card>
      <div>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={
                appUser.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${appUser.avatar}`
              }
            ></Avatar>
          }
          subheader={appUser.userName}
          // subheader={appUser.role === "normal" ? "user" : "admin"}
        />

        <div>
          <CardContent>
            <Typography variant="body1">
              {appUser.biograph || 'No biography yet...'}
            </Typography>
          </CardContent>

          {user && appUser.id === user.id && (
            <CardContent>
              <Typography>Email: {appUser.email}</Typography>
            </CardContent>
          )}

          <CardContent>
            <Typography variant="caption">Joined on:</Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default User;
