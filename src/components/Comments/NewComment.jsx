import { buttons, newComment } from './NewComment.module.css';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useParams, useNavigate } from 'react-router';
import UploadBtn from '../Upload/UploadBtn';
import { createNewComment } from '../../services';

// Importing Custom hooks
import useTitle from '../../hooks/useTitle';

const NewComment = () => {
  const { entryId, title } = useParams();
  const { token } = useUser();
  const [content, setContent] = useState('');
  const [file, setFile] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useTitle('New Comment');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createNewComment(entryId, content, file, token);
      navigate(`/entries/${entryId}/${title}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className={newComment}>
      <TextField
        id="comment"
        label="Comment"
        multiline
        rows={10}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        placeholder="Write your comment here..."
        required
      />

      <div className={buttons}>
        <UploadBtn
          changeHandler={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <Button color="secondary" type="submit" variant="contained">
          Add
        </Button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default NewComment;
