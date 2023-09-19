import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { updateEntry, btn } from './UpdateEntry.module.css';

const UpdateEntry = () => {
    const [category, setCategory] = useState('')
    const [resolved, setResolved] = useState('')

    return(
        <form className={updateEntry}>
        <FormControl>
        <InputLabel id="resolved">Done</InputLabel>
        <Select
          id="resolved"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={resolved}
          label="resolved">
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
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
        
        
        </form>
        
        
        )
}

export default UpdateEntry;