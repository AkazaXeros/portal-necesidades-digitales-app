// Importing custom hooks from React.
import useComments from '../../hooks/useComments';

// Importing custom component.
import Comment from './Comment';

// Importing CSS.
import { allComments } from './AllEntryComments.module.css';

// Importing components from Material UI.
import { Alert, CircularProgress } from '@mui/material';

const AllEntryComments = ({ entryId, token }) => {
  const { comments, loading, error, deleteComment } = useComments(
    entryId,
    token
  );

  if (error)
    return (
      <Alert severity="error" className="notFound">
        {error}
      </Alert>
    );
  if (loading) return <CircularProgress className="circularLoading" />;

  return comments.length > 0 ? (
    <div className={allComments}>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.commentId}>
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
