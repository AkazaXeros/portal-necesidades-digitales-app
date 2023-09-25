import { FormattedRelativeTime } from "react-intl";
import { useNavigate } from "react-router-dom";

import {
  card,
  cardActions,
  cardHeader,
  cardContent,
  header,
} from "./Entry.module.css";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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

import { useUser } from "../../context/UserContext";

const Entry = ({ entry, onEntryPage, onEdit, onProfile }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  const { user } = useUser();

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
      <div className={header}>
        <CardHeader
          className={cardHeader}
          onClick={avatarClickHandler}
          avatar={
            !onProfile && (
              <Avatar
                sx={{ width: 55, height: 55 }}
                src={
                  entry.avatar &&
                  `${import.meta.env.VITE_BACKEND_URL}/${entry.avatar}`
                }></Avatar>
            )
          }
          title={!onProfile && `by ${entry.userName}`}
          subheader={entry.title}
        />
        {user?.id === entry.userId && onEntryPage && (
          <div>
            <EditOutlinedIcon color="secondary" onClick={onEdit} />
          </div>
        )}
      </div>

      <CardContent onClick={contentClickHandler} className={cardContent}>
        <Typography component="p" variant="body2"></Typography>
        <Typography component="p" color="text.secondary">
          {entry.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">
          {`Category: ${entry.category}`}
          <Divider />
          {
            <section
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <p>Published:</p>{" "}
              <Typography component="p" color="text.secondary">
                <FormattedRelativeTime
                  value={-relativeTimeValue}
                  numeric="auto"
                  updateIntervalInSeconds={1000}
                />
              </Typography>
            </section>
          }
        </Typography>
      </CardContent>

      <div className={cardActions}>
        {!onEntryPage && (
          <CardActions>
            <Badge
              badgeContent={entry.numberOfComments}
              color="primary"
              showZero>
              <ModeCommentOutlinedIcon color="primary" />
            </Badge>
          </CardActions>
        )}
      </div>
    </Card>
  );
};

export default Entry;
