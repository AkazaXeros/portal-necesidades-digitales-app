import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { useUser } from "../context/UserContext";
import { deleteEntryService } from "../services";

import { Alert, Button, CircularProgress } from "@mui/material";

import AllEntryComments from "../components/Comments/AllEntryComments";
import Entry from "../components/Entries/Entry";
import useEntry from "../hooks/useEntry";

const EntryPage = () => {
  const { id } = useParams();
  const { token, user } = useUser();
  const navigate = useNavigate();
  const { entry, loading, error } = useEntry(id);

  const [deleteError, setDeleteError] = useState();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  /* ---------------------------Handlers-------------------------------- */
  const downloadHandler = () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${entry.fileName}`;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", entry.fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const deleteHandler = async () => {
    try {
      if (entry.numberOfComments === 0) {
        if (window.confirm("Are you sure you want to delete?")) {
          const data = await deleteEntryService(entry.id, token);
          console.log(data);
          navigate("/");
        }
      }
    } catch (error) {
      setDeleteError(error.message);
    }
  };

  const addCommentHandler = () => {
    navigate(`/comments/${entry.id}`);
  };
  /* ------------------------------------------------------------------ */

  return entry ? (
    <div>
      <div>
        <Entry entry={entry} />
        <div>
          <Button variant="contained" size="small" onClick={downloadHandler}>
            Download File
          </Button>
          <Button variant="contained" size="small" onClick={addCommentHandler}>
            Add Comment
          </Button>
          {user?.id === entry.userId && (
            <>
              <Button variant="contained" size="small" onClick={deleteHandler}>
                Delete
              </Button>
              {deleteError && <p>{deleteError}</p>}
            </>
          )}
        </div>
      </div>
      {token ? (
        <AllEntryComments token={token} entryId={id} entry={entry} />
      ) : null}
    </div>
  ) : null;
};

export default EntryPage;
