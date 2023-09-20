import { Alert, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateEntry, btn } from './UpdateEntry.module.css';
import { updateEntryService } from "../../services";
import { useUser } from "../../context/UserContext";


const UpdateEntry = ({entryId, entryStatus}) => {
    const [category, setCategory] = useState('');
    const [resolved, setResolved] = useState(entryStatus);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {token} = useUser();

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)

            const data = await updateEntryService(category, resolved, token, entryId);
            navigate('/');
            console.log(data);

        } catch (err) {
            setError(err.message)

        } finally { setLoading(false)}
    }
    if (loading) return <CircularProgress/>


    return(



        <form onSubmit={handleSubmit} className={updateEntry}>
        <FormControl>
        <InputLabel id="resolved">Done</InputLabel>
        <Select
          id="resolved"
          onChange={(e) => {
            setResolved(e.target.value);
          }}
          value={resolved}
          label="resolved">
          <MenuItem value={1}>Yes</MenuItem>
          <MenuItem value={0}>No</MenuItem>
          </Select>
          </FormControl>
        
        <FormControl>
        <InputLabel id="category">Category</InputLabel>
        <Select
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          label="Category">
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="video-editing">Video-editing</MenuItem>
          <MenuItem value="image-editing">Image-editing</MenuItem>
          <MenuItem value="document-translation">Document-translation</MenuItem>
          <MenuItem value="document-correction">Document-correction</MenuItem>
          <MenuItem value="code-correction">Code-correction</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        className={btn}
        type="submit"
        color="secondary">
        Add
      </Button>
        
        {error && <Alert severity="error">{error}</Alert>}
        
        </form>
        
        
        )
}

export default UpdateEntry;