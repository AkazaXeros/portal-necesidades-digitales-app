import { entryCard } from "./Entry.module.css";

const Entry = ({ entry }) => {
  return (
    <article className={entryCard}>
      <h2>{entry.title}</h2>
      <p>Category: {entry.category}</p>

      <p>{entry.description}</p>

      <div>
        <img src={entry.avatar} alt="avatar" />
        <p>{entry.userName}</p>
      </div>
      <p>{new Date(entry.createdAt).toLocaleDateString()}</p>
    </article>
  );
};

export default Entry;
