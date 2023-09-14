import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

const Comment = ({ comment, entry }) => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 400 }}>
      <div className="cardEntryAvatar">
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={
                entry.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${entry.avatar}`
              }
            ></Avatar>
          }
          title={entry.title}
        />
      </div>
      <div className="entryCardContent">
        <CardContent>
          <Typography component="p" variant="body2">
            {comment.content}
          </Typography>
          <Typography component="p" color="text.secondary">
            {comment.entryId}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
export default Comment;
