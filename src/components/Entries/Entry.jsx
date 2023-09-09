import { Link } from "react-router-dom";
import { FormattedRelativeTime } from "react-intl";

import Avatar from "../Avatar/Avatar";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

import { entryCard } from "./Entry.module.css";

const Entry = ({ entry }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  return (
    <article className={entryCard}>
      <h2>{entry.title}</h2>
      <p>Category: {entry.category}</p>

      <p>{entry.description}</p>

      <Link to={`/users/${entry.userId}`}>
        <div>
          <Avatar userName={entry.userName} avatar={entry.avatar} />
          <p>{entry.userName}</p>
        </div>
      </Link>

      <p>
        {
          <FormattedRelativeTime
            value={-relativeTimeValue}
            numeric="auto"
            updateIntervalInSeconds={1000}
          />
        }
      </p>
    </article>
  );
};

export default Entry;
