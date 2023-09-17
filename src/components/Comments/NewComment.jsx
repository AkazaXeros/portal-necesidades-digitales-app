import { buttons, newComment } from "./NewComment.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router";
import UploadBtn from "../Upload/UploadBtn";
import { createNewComment } from "../../services";

const NewComment = () => {
  const { entryId } = useParams();
  const { token } = useUser();
  const [content, setContent] = useState("");
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(entryId);
    try {
      const comment = await createNewComment(entryId, content, file, token);
      // console.log(comment);
      navigate(`/entries/${entryId}`);
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
