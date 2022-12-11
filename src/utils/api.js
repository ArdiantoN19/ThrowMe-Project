const BASE_URL = "http://localhost:1337/api";

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const putAccessToken = (accessToken) => {
  return localStorage.setItem("accessToken", accessToken);
};

const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson };
  }
};

const register = async ({ username, email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson };
  }
};

const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, data: responseJson.data };
  } else {
    return { error: false, data: responseJson };
  }
};

const getArticles = async ()=> {
  const resp = await fetch(`${BASE_URL}/arthicles?populate=*`)
  const responseJson = await resp.json();
  
  if (responseJson.data === null) {
    return { error: true, data: responseJson.data };
  } else {
    return { error: false, data: responseJson.data };
    // return responseJson;
  }
}

const getFeaturedArticle = async () => {
  const response = await fetch(`${BASE_URL}/arthicles?populate=*&filters[featured][$eq]=true`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

async function getArticle(id) {
  const response = await fetch(`${BASE_URL}/arthicles/${id}?populate=*`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
    // return responseJson;
  }
}


export { getAccessToken, putAccessToken, login, register, getUserLogged, getArticles, getFeaturedArticle, getArticle};
