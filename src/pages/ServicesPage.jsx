// Importing custom hooks components.
import useEntries from '../hooks/useEntries';
import { useFilter } from '../context/FilterContext';
import useTitle from '../hooks/useTitle';

// Importing custom component.
import AllEntries from '../components/Entries/AllEntries';

// Importing CSS.
import classes from './ServicesPage.module.css';

// Importing Material UI component.
import { TextField } from '@mui/material';

const ServicesPage = () => {
  const { entries, loading, error } = useEntries();
  const { category, setCategory } = useFilter();

  const filteredEntries = entries.filter((entry) =>
    entry.category.includes(category || '')
  );

  useTitle('Our services');

  return (
    <article className={classes.page}>
      <TextField
        autoFocus
        id="text"
        label="Category Search..."
        type="text"
        className={classes.input}
        placeholder="video-editing"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <AllEntries entries={filteredEntries} loading={loading} error={error} />
    </article>
  );
};
export default ServicesPage;
