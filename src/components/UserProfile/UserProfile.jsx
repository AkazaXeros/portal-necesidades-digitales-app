import Avatar from "../Avatar/Avatar";
import Entry from "../Entries/Entry";
import { userCard } from "./UserProfile.module.css";
import useEntries from "../../hooks/useEntries";

import { Box, Divider } from "@chakra-ui/react";
import { FormattedDate } from "react-intl";
import { useEffect, useState } from "react";

const UserProfile = ({ appUser }) => {
  const { entries } = useEntries();

  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    setUserEntries(
      entries.filter((entry) => entry.userId === parseInt(appUser.id))
    );
  }, [entries, appUser]);

  return (
    <article className={userCard}>
      <div>
        <Box w="100%" p={4}>
          <div>
            <h5>
              {appUser.userName}
              <div>
                <Avatar userName={appUser.userName} avatar={appUser.avatar} />
              </div>
            </h5>
            <p>Role: {appUser.role === "normal" ? "user" : "admin"}</p>
          </div>
        </Box>

        <Box w="100%" p={4}>
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
        </Box>
      </div>
      <Divider />
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
    </article>
  );
};
export default UserProfile;
