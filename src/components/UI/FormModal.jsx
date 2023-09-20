import Card from './Card';
import classes from './FormModal.module.css';

const FormModal = ({ children }) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>{children}</Card>
    </div>
  );
};
export default FormModal;
