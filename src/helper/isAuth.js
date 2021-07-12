import jwtDecode from "jwt-decode";

const isAuth = {
  isAuthenticated() {
    const { token } = localStorage;
    if (token === undefined) {
      return false;
    } else {
      const decoded = jwtDecode(token);
      if (
        !decoded ||
        !decoded.email ||
        !decoded.userId ||
        !decoded.iat ||
        !decoded.exp
      )
        return false;
      return decoded.exp > Date.now() / 1000;
    }
  },
};

export default isAuth;
