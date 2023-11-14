const headerToken =
  localStorage.getItem("adminLogin") !== null
    ? JSON.parse(localStorage.getItem("adminLogin")).token.access
    : "";

export const axiosBearerToken = "Bearer " + headerToken;
