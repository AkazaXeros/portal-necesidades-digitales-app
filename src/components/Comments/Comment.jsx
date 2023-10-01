// Importing hook from React.
import { useState } from 'react';

// Importing custom components.
import { deleteCommentService } from '../../services';
import { useUser } from '../../context/UserContext';

// Importing CSS.
import { btns, card, cardContent, commentDate } from './Comment.module.css';

// Importing Material UI components.
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import relativeTimeCalc from '../../utils/relativeTimeCalc';
import { FormattedRelativeTime } from 'react-intl';

const Comment = ({ comment, onDelete }) => {
  const { user, token } = useUser();
  const [error, setError] = useState();

  const relativeTimeValue = relativeTimeCalc(comment.commentCreatedAt);

  //-------------------------Handlers-----------------------------//
  const deleteHandler = async () => {
    try {
      await deleteCommentService(comment.commentId, token);
      onDelete(comment.commentId);
    } catch (err) {
      setError(err);
    }
  };

  const downloadHandler = () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${comment.fileName}`;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', comment.fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className={card}>
      <Card>
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
        <Divider variant="middle" />
        <CardContent>
          <Typography component="p" variant="body2" className={cardContent}>
            {comment.content}
          </Typography>

          <Divider />
          <Typography
            component="p"
            color="text.secondary"
            className={commentDate}
          >
            <FormattedRelativeTime
              value={-relativeTimeValue}
              numeric="auto"
              updateIntervalInSeconds={1000}
            />
          </Typography>
        </CardContent>

        <div className={btns}>
          {user && user.id === comment.userId && (
            <Button onClick={deleteHandler}>
              <DeleteOutlineOutlinedIcon />
            </Button>
          )}

          {comment.fileName && (
            <Button onClick={downloadHandler}>
              <FileDownloadOutlinedIcon />
            </Button>
          )}
        </div>
      </Card>
      {error && (
        <Alert severity="error" className="notFound">
          {error}
        </Alert>
      )}
    </div>
  );
};
export default Comment;
