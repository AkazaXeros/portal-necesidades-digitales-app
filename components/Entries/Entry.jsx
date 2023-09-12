import Avatar from "../Avatar/Avatar";
import { entryCard } from "./Entry.module.css";

import { Button, CardHeader, Flex } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { FormattedRelativeTime } from "react-intl";
import { Link } from "react-router-dom";
import relativeTimeCalc from "../../utils/relativeTimeCalc";

const Entry = ({ entry }) => {
  const relativeTimeValue = relativeTimeCalc(entry.createdAt);

  return (
    <Card className={entryCard}>
      <CardHeader>
        <Stack spacing="5">
          <Heading size="md" className="header">
            {entry.title}
          </Heading>
          <CardBody>
            <p>Category: {entry.category}</p>
            <p>{entry.description}</p>
          </CardBody>

          <Flex>
            <p>
              {
                <FormattedRelativeTime
                  value={-relativeTimeValue}
                  numeric="auto"
                  updateIntervalInSeconds={1000}
                />
              }
            </p>
          </Flex>
        </Stack>
      </CardHeader>
      <Divider color="cadetblue" />
      <CardFooter>
        <Flex gap="20" alignItems="center">
          <Link to={`/users/${entry.userId}`}>
            <Avatar userName={entry.userName} avatar={entry.avatar}>
              {" "}
            </Avatar>
            <p>{entry.userName}</p>
          </Link>
          <Button colorScheme="yellow">View here</Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Entry;
