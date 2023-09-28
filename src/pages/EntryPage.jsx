// Importing hook from React
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// Importing React component
import { Helmet } from "react-helmet";

import AllEntryComments from "../components/Comments/AllEntryComments";
import { buttons } from "./EntryPage.module.css";
import { deleteEntryService } from "../services";
import Entry from "../components/Entries/Entry";
import FormModal from "../components/UI/FormModal";
import UpdateEntry from "../components/Forms/UpdateEntry";
import useEntry from "../hooks/useEntry";
import { useUser } from "../context/UserContext";

// Importing ui material components
import { Alert, CircularProgress, Fab } from "@mui/material";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Creating an entry page component
const EntryPage = () => {
  const { id } = useParams();
  const { token, user } = useUser();
  const { entry, loading, error, setEntry } = useEntry(id);
  const navigate = useNavigate();

  const [modalIsOpened, setModalIsOpened] = useState(false);

  const [deleteError, setDeleteError] = useState();
  const onEntryPage = true;

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

  const editHandler = () => {
    setModalIsOpened((prevState) => !prevState);
  };

  /* ------------------------------------------------------------------ */

  return entry ? (
    <div>
      <Helmet>
        <title>{entry.title}</title>
      </Helmet>
      {modalIsOpened && (
        <div>
          <FormModal onEdit={editHandler}>
            <UpdateEntry
              entry={entry}
              onEdit={editHandler}
              setEntry={setEntry}
            />
          </FormModal>
        </div>
      )}
      <Entry entry={entry} onEntryPage={onEntryPage} onEdit={editHandler} />
      {token && (
        <div className={buttons}>
          <Fab
            variant="contained"
            size="small"
            color="secondary"
            onClick={downloadHandler}>
            <FileDownloadOutlinedIcon />
          </Fab>
          <Fab
            variant="contained"
            size="small"
            color="secondary"
            onClick={addCommentHandler}>
            <AddCommentOutlinedIcon />
          </Fab>
          {user?.id === entry.userId && entry.numberOfComments === 0 && (
            <>
              <Fab
                variant="contained"
                size="small"
                color="secondary"
                onClick={deleteHandler}>
                <DeleteOutlineOutlinedIcon />
              </Fab>
              {deleteError && <Alert severity="error">{deleteError}</Alert>}
            </>
          )}
        </div>
      )}
      {token ? (
        <AllEntryComments token={token} entryId={id} entry={entry} />
      ) : null}
    </div>
  ) : null;
};

export default EntryPage;
