import Card from './Card';
import classes from './FormModal.module.css';

const FormModal = ({ children, onEdit }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onEdit} />
      <Card className={classes.modal}>{children}</Card>
    </div>
  );
};
export default FormModal;
