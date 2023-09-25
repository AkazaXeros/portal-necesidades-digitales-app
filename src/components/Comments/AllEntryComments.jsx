// Importing hook from react
import useComments from "../../hooks/useComments";

// Importing component Comment
import Comment from "./Comment";

// Importing CSS
import { allComments } from "./AllEntryComments.module.css";

// Importing components from Material UI
import { Alert, CircularProgress } from "@mui/material";

// Creating AllEntryComments component
const AllEntryComments = ({ entryId, token }) => {
  const { comments, loading, error, deleteComment } = useComments(
    entryId,
    token
  );

  if (error) return <Alert severity="error">{error}</Alert>;
  if (loading) return <CircularProgress />;
  return comments.length > 0 ? (
    <div className={allComments}>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.commentId}>
              {/* {Aqui dentro deberiamos poner un componente personalizado(comment) para cada comentario con su CSS. Creo que seria buena idea que por ahora usaramos un diseño como el de las tarjetas de los servicios} */}
              <Comment
                comment={comment}
                entryId={entryId}
                onDelete={deleteComment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
export default AllEntryComments;
