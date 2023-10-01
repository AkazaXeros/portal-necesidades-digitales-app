// Importing component from React.
import { FormattedRelativeTime } from 'react-intl';

// Importing hook from React.
import { useNavigate } from 'react-router-dom';

// Importing custom hooks.
import { useUser } from '../../context/UserContext';

// Importing custom component.
import relativeTimeCalc from '../../utils/relativeTimeCalc';

// Importing CSS.
import {
  card,
  cardDescription,
  titleDescription,
  cardHeader,
  cardContent,
  header,
} from './Entry.module.css';

// Importing Material UI components.
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

const Entry = ({ entry, onEntryPage, onEdit, onProfile }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  const { user } = useUser();

  const navigate = useNavigate();

  //-----------Handlers-------------//
  const avatarClickHandler = (e) => {
    e.preventDefault();
    navigate(`/users/${entry.userId}/${entry.userName}`);
  };

  const contentClickHandler = () => {
    navigate(
      `/entries/${entry.id}/${entry.title.toLowerCase().replaceAll(' ', '-')}`
    );
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
                }
              ></Avatar>
            )
          }
          title={!onProfile && `${entry.userName}`}
        />

        {user?.id === entry.userId && onEntryPage && (
          <div>
            <EditOutlinedIcon color="secondary" onClick={onEdit} />
          </div>
        )}
      </div>

      <CardContent onClick={contentClickHandler} className={cardContent}>
        <Typography
          variant="h5"
          className={!onEntryPage ? titleDescription : ''}
        >
          {entry.title}
        </Typography>

        <Divider />

        <Typography
          component="p"
          color="text.secondary"
          mt={1.5}
          className={!onEntryPage ? cardDescription : ''}
        >
          {entry.description}
        </Typography>
      </CardContent>

      <CardContent align="right">
        <Typography variant="caption" color="text.secondary">
          {`Category: ${entry.category}`}
        </Typography>

        <Divider variant="inset" />

        <Typography color="text.secondary" mt={1.5} mb={2}>
          <FormattedRelativeTime
            value={-relativeTimeValue}
            numeric="auto"
            updateIntervalInSeconds={1000}
          />
        </Typography>

        {!onEntryPage && (
          <CardActions>
            <Badge
              badgeContent={entry.numberOfComments}
              color="primary"
              showZero
            >
              <ModeCommentOutlinedIcon color="primary" />
            </Badge>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default Entry;
