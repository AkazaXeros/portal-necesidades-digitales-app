import { useParams } from "react-router-dom";

import { Alert, Button, CircularProgress } from "@mui/material";

import AllEntryComments from "../components/Comments/AllEntryComments";
import Entry from "../components/Entries/Entry";
import useEntry from "../hooks/useEntry";
import { useUser } from "../context/UserContext";

const EntryPage = () => {
  const { id } = useParams();
  const { token } = useUser();

  const { entry, loading, error } = useEntry(id);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

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

  return entry ? (
    <div>
      <div>
        <Entry entry={entry} />
        <Button variant="contained" size="small" onClick={downloadHandler}>
          Download File
        </Button>
      </div>
      {token ? <AllEntryComments token={token} entryId={id} /> : null}
    </div>
  ) : null;
};

export default EntryPage;
