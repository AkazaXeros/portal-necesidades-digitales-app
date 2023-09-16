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

export const getEntry = async (entryId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/entries/${entryId}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.entry;
};

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

export const getAllEntries = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/entries`);

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.entries;
};

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

export const getUserService = async (userId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/${userId}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.data.user;
};

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
