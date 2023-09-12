import Entry from "../Entries/Entry";
// import { userCard } from "./UserProfile.module.css";
import useEntries from "../../hooks/useEntries";

import { FormattedDate } from "react-intl";
import { useEffect, useState } from "react";
import { Avatar, Card, CardHeader } from "@mui/material";

const UserProfile = ({ appUser }) => {
  const { entries } = useEntries();

  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    setUserEntries(
      entries.filter((entry) => entry.userId === parseInt(appUser.id))
    );
  }, [entries, appUser]);

  return (
    <Card>
      <CardHeader>
        title={appUser.userName}
        avatar={<Avatar sx={{ width: 40, height: 40 }} />}
        subheader={}
      </CardHeader>

      <p>Role: {appUser.role === "normal" ? "user" : "admin"}</p>

      <ul>
        <li className="bio">
          <section className="bio">
            <p>{appUser.biograph || "No biography yet..."}</p>
          </section>
        </li>
        {appUser.email && (
          <li>
            <section>
              <span>Email: {appUser.email}</span>
            </section>
          </li>
        )}
        <li>
          <section className="joinedAt">
            <span>Joined on:</span>
            <span>
              {
                <FormattedDate
                  value={appUser.createdAt}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
              }
            </span>
          </section>
        </li>
      </ul>

      {!userEntries.length ? (
        <p>Loading entries...</p>
      ) : (
        <div>
          <ul>
            {userEntries.map((entry) => (
              <li key={entry.id}>
                <Entry entry={entry} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};
export default UserProfile;
