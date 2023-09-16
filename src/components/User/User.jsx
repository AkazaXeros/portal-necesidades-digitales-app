import { biograph, card } from "./User.module.css";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

import { useUser } from "../../context/UserContext";

const User = ({ appUser }) => {
  const { user } = useUser();
  return (
    <Card className={card}>
      <div>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 60, height: 60 }}
              src={
                appUser.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${appUser.avatar}`
              }></Avatar>
          }
          title={appUser.userName}
          // subheader={appUser.role === "normal" ? "user" : "admin"}
          subheader="Joined on:"
        />
        <Divider variant="middle" />

        <div>
          <CardContent className={biograph}>
            <Typography variant="overline">
              {appUser.biograph || "No biography yet..."}
            </Typography>
          </CardContent>

          <Divider variant="inset" />
          {user && appUser.id === user.id && (
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
