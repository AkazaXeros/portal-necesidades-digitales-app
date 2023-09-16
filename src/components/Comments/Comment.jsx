import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

const Comment = ({ comment }) => {
  // console.log(comment);
  return (
    <Card sx={{ minWidth: 250, maxWidth: 400 }}>
      <div className="cardEntryAvatar">
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={
                comment.avatar &&
                `${import.meta.env.VITE_BACKEND_URL}/${comment.avatar}`
              }
            ></Avatar>
          }
          title={comment.userName}
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
