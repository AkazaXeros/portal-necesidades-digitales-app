// Importing CSS
import { header, main } from "./User.module.css";

import { useUser } from "../../context/UserContext";

// Importing Material UI components
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

// Component for displaying user data
const User = ({ appUser, onEdit }) => {
  const { user } = useUser();

  return (
    <Card className={main}>
      <div className={header}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 80, height: 80 }}
              src={
                appUser.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${appUser.avatar}`
              }></Avatar>
          }
          title={appUser.userName}
          subheader={appUser.role === "normal" ? "user" : "admin"}
        />
        {appUser.id === user?.id && (
          <div>
            <EditOutlinedIcon color="secondary" onClick={onEdit} />
          </div>
        )}
      </div>

      <Divider variant="middle" />

      <CardContent>
        <Typography>{appUser.biograph || "No biography yet..."}</Typography>
      </CardContent>
      <Divider variant="inset" />

      <CardContent align="right">
        <Typography variant="caption" color="text.secondary">
          Joined On
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {appUser.id === user?.id && <div>Email: {user.email}</div>}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default User;
