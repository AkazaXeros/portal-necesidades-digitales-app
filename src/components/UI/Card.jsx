// Importing CSS.
import classes from './Card.module.css';

const Card = ({ className, children, onClick }) => {
  return (
    <div className={`${classes.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
