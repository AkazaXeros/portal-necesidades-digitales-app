export const registerUserService = async ({ userName, email, password }) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

export const loginUserService = async ({ email, password }) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data.token;
};

export const getUserDataService = async (token) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/info`, {
    headers: { Authorization: token },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data.user;
};
