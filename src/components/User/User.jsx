import { biograph, card } from "./User.module.css";
import { useUser } from "../../context/UserContext";

import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const User = ({ appUser }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const editUserHandler = () => {
    navigate("/");
  };

  return (
    <Card className={card}>
      <div>
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
          // subheader={appUser.role === "normal" ? "user" : "admin"}
          subheader="Joined on:"
        />
        <Button onClick={editUserHandler} color="secondary">
          <EditOutlinedIcon />
        </Button>
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
