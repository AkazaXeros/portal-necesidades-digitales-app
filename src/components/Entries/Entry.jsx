import Avatar from "../Avatar/Avatar";
import { entryCard } from "./Entry.module.css";

import { Box, CardHeader, Flex } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Heading, Divider } from "@chakra-ui/react";
import { FormattedRelativeTime } from "react-intl";
import { Link } from "react-router-dom";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

const Entry = ({ entry }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  return (
    <div className={entryCard}>
      <Card maxW="md">
        <CardHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading size="md">{entry.title}</Heading>

            <Box>
              <Link to={`/users/${entry.userId}`}>
                <Avatar avatar={entry.avatar} />
              </Link>
              <Heading size="sm">{entry.userName}</Heading>
            </Box>
          </Flex>
        </CardHeader>
        <Divider color="cadetblue" />
        <CardBody>
          <Flex flexDirection="column" gap="10">
            <p>{entry.description}</p>

            <p>{entry.category}</p>
          </Flex>
        </CardBody>

        <Divider color="cadetblue" />
        <CardFooter>
          <p>
            {
              <FormattedRelativeTime
                value={-relativeTimeValue}
                numeric="auto"
                updateIntervalInSeconds={1000}
              />
            }
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Entry;
