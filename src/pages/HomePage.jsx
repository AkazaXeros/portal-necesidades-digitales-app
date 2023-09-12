import AllEntries from "../components/Entries/AllEntries";
import useEntries from "../hooks/useEntries";

const HomePage = () => {
  const { entries, loading, error } = useEntries();

  if (loading) return <p>Loading entries...</p>;
  if (error) return <p>An error has occurred...</p>;

  return (
    <>
      <AllEntries entries={entries} />
    </>
  );
};
export default HomePage;
