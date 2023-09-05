import { entryCard } from "./Entry.module.css";

const Entry = ({ entry }) => {
  return (
    <article className={entryCard}>
      <header>
        <h2>{entry.title}</h2>
        <p>Category: {entry.category}</p>
      </header>
      <main>
        <p>{entry.description}</p>
      </main>
      <footer>
        <div>
          <img src={entry.avatar} alt="avatar" />
          <p>{entry.userName}</p>
        </div>
        <p>{new Date(entry.createdAt).toLocaleDateString()}</p>
      </footer>
    </article>
  );
};

export default Entry;
