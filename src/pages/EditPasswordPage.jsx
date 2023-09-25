import EditPassword from '../components/UserProfile/EditPassword';

// Importing React component
import { Helmet } from 'react-helmet';

const EditPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy and Security</title>
      </Helmet>
      <EditPassword />
    </>
  );
};
export default EditPasswordPage;
