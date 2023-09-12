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

import { FormattedRelativeTime } from "react-intl";
import { Link } from "react-router-dom";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

const Entry = ({ entry }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  return (
    <Card sx={{ minWidth: 250, maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Link to={`/users/${entry.userId}`}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={`${import.meta.env.VITE_BACKEND_URL}/${
                entry.avatar
              }`}></Avatar>
          </Link>
        }
        title={entry.title}
        subheader={
          <FormattedRelativeTime
            value={-relativeTimeValue}
            numeric="auto"
            updateIntervalInSeconds={1000}
          />
        }
      />
      <CardContent>
        <Typography component="p" variant="body2">
          {entry.category}
        </Typography>
        <Typography component="p" color="text.secondary">
          {entry.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Badge badgeContent={entry.numberOfComments} color="secondary" showZero>
          <ModeCommentOutlinedIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};

export default Entry;
