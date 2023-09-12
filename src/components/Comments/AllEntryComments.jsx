import useComments from "../../hooks/useComments";

const AllEntryComments = ({ entryId, token }) => {
  const { comments } = useComments(entryId, token);

  return comments ? (
    <div>
      <ul>
        {comments.map((comment) => {
          <li>{comment.content}</li>;
        })}
      </ul>
    </div>
  ) : null;
};
export default AllEntryComments;
