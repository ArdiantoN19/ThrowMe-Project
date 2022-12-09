const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const CLOUD_NAME_CLOUDINARY = process.env.REACT_APP_CLOUD_NAME_CLOUDINARY;
const RAPIDAPI_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY;

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
    return {
      error: true,
      data: responseJson.data,
      message: responseJson.error.message,
    };
  } else {
    return { error: false, data: responseJson };
  }
};

const changeUserPassword = async ({
  currentPassword,
  password,
  passwordConfirmation,
}) => {
  const response = await fetchWithToken(`${BASE_URL}/auth/change-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      currentPassword,
      password,
      passwordConfirmation,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson };
  }
};

const addPlace = async ({
  category,
  name,
  status,
  resultPlace,
  url,
  owner,
  telp,
  url_public_id,
  description,
}) => {
  const response = await fetchWithToken(`${BASE_URL}/places`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      data: {
        category,
        name: name,
        status: status,
        features: resultPlace,
        url,
        owner: owner,
        telp,
        url_public_id,
        description,
      },
    }),
  });

  const responseJson = await response.json();
  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson };
  }
};

const getAllPlaces = async () => {
  const response = await fetch(`${BASE_URL}/places`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getUpdatedPlace = async () => {
  const response = await fetch(
    `${BASE_URL}/places?pagination[start]=0&pagination[limit]=4&sort=id%3Adesc`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getPlacesDependUser = async (user) => {
  const response = await fetch(
    `${BASE_URL}/places?filters[owner][$eq]=${user}`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getDetailPlace = async (id) => {
  const response = await fetch(`${BASE_URL}/places/${id}`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

// const editPlaceDependUser = async ({
//   id,
//   category,
//   name,
//   status,
//   coordinates,
//   address,
// }) => {
//   const response = await fetchWithToken(`${BASE_URL}/places/${id}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       data: {
//         category,
//         name,
//         status,
//         geometry: { coordinates },
//         address,
//       },
//     }),
//   });
//   const responseJson = await response.json();
//   if (responseJson.data === null) {
//     return { error: true, message: responseJson.error.message };
//   } else {
//     return { error: false, data: responseJson.data };
//   }
// };

const deletePlaceDependUser = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/places/${id}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();
  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getPlacesDependCategory = async (category) => {
  const response = await fetch(
    `${BASE_URL}/places?filters[category][$eq]=${category}`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getArticles = async () => {
  const response = await fetch(
    `${BASE_URL}/articles?sort=id%3Adesc&populate=*`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getArticle = async (id) => {
  const response = await fetch(`${BASE_URL}/articles/${id}?populate=*`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getUpdatedArticle = async () => {
  const response = await fetch(
    `${BASE_URL}/articles?populate=*&pagination[start]=0&pagination[limit]=4&sort=id%3Adesc`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getAuthors = async () => {
  const response = await fetch(`${BASE_URL}/authors?populate=*`);
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const getFeaturedArticle = async () => {
  const response = await fetch(
    `${BASE_URL}/articles?populate=*&filters[featured][$eq]=true`
  );
  const responseJson = await response.json();

  if (responseJson.data === null) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson.data };
  }
};

const uploadImageCloudinary = async (formData) => {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME_CLOUDINARY}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const responseJson = await response.json();
  if (responseJson.error) {
    return { error: true, message: responseJson.error.message };
  } else {
    return { error: false, data: responseJson };
  }
};

const reverseGeocode = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat}%2C${lng}&language=en`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
        },
      }
    );

    const responseJson = await response.json();
    return { error: false, data: responseJson.results };
  } catch (error) {
    return { error: true, message: error };
  }
};

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  changeUserPassword,
  addPlace,
  getAllPlaces,
  getPlacesDependUser,
  getDetailPlace,
  getUpdatedPlace,
  deletePlaceDependUser,
  getPlacesDependCategory,
  getArticles,
  getArticle,
  getAuthors,
  getFeaturedArticle,
  uploadImageCloudinary,
  reverseGeocode,
  getUpdatedArticle,
  // editPlaceDependUser,
};
