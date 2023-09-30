import EditPassword from '../components/UserProfile/EditPassword';

import useTitle from '../hooks/useTitle';

const EditPasswordPage = () => {
  useTitle('Privacy and Security');
  return <EditPassword />;
};
export default EditPasswordPage;
