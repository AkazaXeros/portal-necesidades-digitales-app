import { FormattedRelativeTime } from "react-intl";
import { useNavigate } from "react-router-dom";
// import { entryCard } from "./Entry.module.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import relativeTimeCalc from "../../utils/relativeTimeCalc";

const Entry = ({ entry }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  const navigate = useNavigate();

  const avatarClickHandler = (e) => {
    e.preventDefault();
    navigate(`/users/${entry.userId}`);
  };

  const contentClickHandler = () => {
    navigate(`/entries/${entry.id}`);
  };

  return (
    <Card sx={{ minWidth: 250, maxWidth: 400 }}>
      <div onClick={avatarClickHandler} className="cardEntryAvatar">
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={
                entry.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${entry.avatar}`
              }></Avatar>
          }
          title={entry.title}
        />
      </div>

      <div className="entryCardContent" onClick={contentClickHandler}>
        <CardContent>
          <Typography component="p" variant="body2">
            {entry.category}
          </Typography>
          <Typography component="p" color="text.secondary">
            {entry.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="caption">
            {
              <FormattedRelativeTime
                value={-relativeTimeValue}
                numeric="auto"
                updateIntervalInSeconds={1000}
              />
            }
          </Typography>
        </CardContent>
      </div>

      <CardActions>
        <Badge badgeContent={entry.numberOfComments} color="secondary" showZero>
          <ModeCommentOutlinedIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};

export default Entry;
