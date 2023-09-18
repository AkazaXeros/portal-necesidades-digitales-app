import { useUser } from '../../context/UserContext';
import { btns, card } from './Comment.module.css';

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
import { useState } from 'react';
import { deleteCommentService } from '../../services';
import { useNavigate } from 'react-router-dom';

const Comment = ({ comment }) => {
  // console.log(comment);

  const navigate = useNavigate();
  const { user, token } = useUser();
  const [error, setError] = useState();

  //-------------------------Handlers-----------------------------//
  const deleteHandler = async () => {
    try {
      const data = await deleteCommentService(comment.commentId, token);
      console.log(data);
      navigate(`/`);
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
          <Typography component="p" variant="body2">
            {comment.content}
          </Typography>
          <Typography component="p" color="text.secondary">
            {comment.entryId}
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
        {error && <Alert severity="error">{error}</Alert>}
      </Card>
    </div>
  );
};
export default Comment;
