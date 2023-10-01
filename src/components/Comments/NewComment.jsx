// Importing hooks from React.
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';

// Importing custom hooks.
import { useUser } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';

// Importing custom components.
import UploadBtn from '../Upload/UploadBtn';
import { createNewComment } from '../../services';

// Importing CSS.
import { buttons, newComment } from './NewComment.module.css';

// Importing Material UI components.
import { Button, TextField } from '@mui/material';

const NewComment = () => {
  const { entryId, title } = useParams();
  const { token } = useUser();
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [file, setFile] = useState();
  const [error, setError] = useState('');

  useTitle('New Comment');

  //----------Handler-------------//
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
