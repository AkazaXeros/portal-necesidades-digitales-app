// Create a new service entry
export const createEntryService = async ({
  title,
  description,
  file,
  category,
  token,
}) => {
  const fd = new FormData();
  fd.append('title', title);
  fd.append('description', description);
  fd.append('file', file);
  fd.append('category', category);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/entries`, {
    method: 'POST',
    headers: { Authorization: `${token}` },
    body: fd,
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.entry;
};

// Create a new comment
export const createNewComment = async (entryId, content, file, token) => {
  const fd = new FormData();
  fd.append('content', content);
  fd.append('file', file);
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/comments/${entryId}`,
    {
      method: 'POST',
      headers: { Authorization: `${token}` },
      body: fd,
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.comment;
};

// Delete the comment of a service
export const deleteCommentService = async (commentId, token) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/comments/${commentId}`,
    {
      method: 'DELETE',
      headers: { Authorization: token },
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.message;
};

// Delete a service entry
export const deleteEntryService = async (entryId, token) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/entries/${entryId}`,
    {
      method: 'DELETE',
      headers: { Authorization: token },
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.message;
};

// Get the data of an entry
export const getEntry = async (entryId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/entries/${entryId}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.entry;
};

// Have all comments
export const getAllComments = async (entryId, token) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/comments/${entryId}`,
    {
      headers: { Authorization: token },
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.comments;
};

// Have all entries
export const getAllEntries = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/entries`);

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.entries;
};

// Get user data
export const getUserDataService = async (token) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/`, {
    headers: { Authorization: token },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data.user;
};

// Get user
export const getUserService = async (userId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/${userId}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.user;
};

// Login a user
export const loginUserService = async ({ email, password }) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data.token;
};

// Register a user
export const registerUserService = async ({ userName, email, password }) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

// Change entry
export const updateEntryService = async (
  category,
  resolved,
  token,
  entryId
) => {
  const fd = new FormData();
  fd.append('category', category);
  fd.append('resolved', resolved);

  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/entries/${entryId}`,
    {
      method: 'PUT',
      headers: { Authorization: token },
      body: fd,
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return data.data.updatedEntry;
};

// Change user profile data
export const updateUserService = async ({
  avatarFile,
  biography,
  userName,
  token,
}) => {
  const fd = new FormData();
  fd.append('avatar', avatarFile);
  fd.append('biography', biography);
  fd.append('userName', userName);

  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/update-profile`,
    {
      method: 'PUT',
      headers: { Authorization: token },
      body: fd,
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return data.data.updatedUser;
};

// Change password
export const updatePassword = async (currentPass, newPass, token) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/password`,
    {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentPass, newPass }),
    }
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.message;
};
