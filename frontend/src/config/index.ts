const BACKEND_URL = process.env.APP_URL_BACKEND;

export default {
  BACKEND_URL,
  API: {
    AUTH_TOKEN_LOGIN: BACKEND_URL + '/auth/token',
    AUTH_LOCAL_LOGIN: BACKEND_URL + '/auth/local',
    AUTH_GOOGLE_LOGIN: BACKEND_URL + '/auth/google',
  },
};
