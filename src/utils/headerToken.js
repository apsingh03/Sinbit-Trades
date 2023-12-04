const headerToken =
  sessionStorage.getItem("adminLogin") !== null
    ? JSON.parse(sessionStorage.getItem("adminLogin")).token.access
    : null;

export const axiosBearerToken = "Bearer " + headerToken;
