// Importing custom component.
import EditPassword from '../components/UserProfile/EditPassword';

// Importing custom hooks components.
import useTitle from '../hooks/useTitle';

const EditPasswordPage = () => {
  useTitle('Privacy and Security');
  return <EditPassword />;
};
export default EditPasswordPage;
