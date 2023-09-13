import { useParams } from 'react-router-dom';

import useEntry from '../hooks/useEntry';
import { useUser } from '../context/UserContext';

import Entry from '../components/Entries/Entry';
import AllEntryComments from '../components/Comments/AllEntryComments';

const EntryPage = () => {
  const { id } = useParams();
  const { token } = useUser();

  const { entry, loading, error } = useEntry(id);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;
  // console.log(entry);

  return entry ? (
    <div>
      <Entry entry={entry} />
      {token ? <AllEntryComments token={token} entryId={id} /> : null}
    </div>
  ) : null;
};

export default EntryPage;
