// Importing Material UI components.
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadBtn = ({ changeHandler, className }) => {
  return (
    <Button
      className={className ? className : ''}
      color="secondary"
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onChange={changeHandler}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};

export default UploadBtn;
