import { biograph, card, header } from './User.module.css';
import { useUser } from '../../context/UserContext';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

const User = ({ appUser, onEdit }) => {
  const { user } = useUser();

  return (
    <Card className={card}>
      <div>
        <div className={header}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 80, height: 80 }}
                src={
                  appUser.avatar &&
                  `${import.meta.env.VITE_BACKEND_URL}/${appUser.avatar}`
                }
              ></Avatar>
            }
            title={appUser.userName}
            // subheader={appUser.role === "normal" ? "user" : "admin"}
            subheader="Joined on:"
          />
          {appUser.id === user?.id && (
            <div>
              <EditOutlinedIcon color="secondary" onClick={onEdit} />
            </div>
          )}
        </div>
        <Divider variant="middle" />

        <div>
          <CardContent className={biograph}>
            <Typography variant="overline">
              {appUser.biograph || 'No biography yet...'}
            </Typography>
          </CardContent>

          <Divider variant="inset" />
          {appUser.id === user?.id && (
            <CardContent>
              <Typography variant="caption">Email:{appUser.email}</Typography>
            </CardContent>
          )}
        </div>
      </div>
    </Card>
  );
};

export default User;
