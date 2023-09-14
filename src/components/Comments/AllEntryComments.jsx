import useComments from '../../hooks/useComments';
import Comment from './Comment';

const AllEntryComments = ({ entryId, token, entry }) => {
  const { comments, loading, error } = useComments(entryId, token);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading comments...</p>;
  return comments.length > 0 ? (
    <div>
      <h3>Comments: </h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.commentId}>
              {/* {Aqui dentro deberiamos poner un componente personalizado(comment) para cada comentario con su CSS. Creo que seria buena idea que por ahora usaramos un diseño como el de las tarjetas de los servicios} */}
              <Comment comment={comment} entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
export default AllEntryComments;
