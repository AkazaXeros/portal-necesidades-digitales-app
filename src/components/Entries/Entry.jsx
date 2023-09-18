import { FormattedRelativeTime } from "react-intl";
import { useNavigate } from "react-router-dom";

import { card, cardActions, cardHeader } from "./Entry.module.css";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

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
    <Card className={card}>
      <CardHeader
        className={cardHeader}
        onClick={avatarClickHandler}
        avatar={
          <Avatar
            sx={{ width: 55, height: 55 }}
            src={
              entry.avatar &&
              `${import.meta.env.VITE_BACKEND_URL}/${entry.avatar}`
            }></Avatar>
        }
        title={entry.title}
      />

      <CardContent onClick={contentClickHandler}>
        <Typography component="p" variant="body2"></Typography>
        <Typography component="p" color="text.secondary">
          {entry.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">
          {entry.category}
          <Divider />
          {
            <FormattedRelativeTime
              value={-relativeTimeValue}
              numeric="auto"
              updateIntervalInSeconds={1000}
            />
          }
        </Typography>
      </CardContent>

      <div className={cardActions}>
        <CardActions>
          <Badge badgeContent={entry.numberOfComments} color="primary" showZero>
            <ModeCommentOutlinedIcon color="primary" />
          </Badge>
        </CardActions>
      </div>
    </Card>
  );
};

export default Entry;
