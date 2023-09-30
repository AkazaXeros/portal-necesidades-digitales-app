import { useEffect } from 'react';

const useTitle = (title) => {
  //   const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
