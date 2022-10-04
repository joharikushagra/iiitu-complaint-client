import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/Axios";
import { useRouter } from "next/router";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState({ role: "", email: "" });

  function skipAuthCheck(path) {
    const nonProtectedPages = ["/Login", "/Signup"];
    if (nonProtectedPages.includes(path)) {
      return true;
    }

    return false;
  }

  const isUserAuthenticated = () => {
    if (!authState.role) return 0;
    return 1;
  };

  // useEffect(() => {
  //   axiosInstance
  //     .get("/auth/autoLogin")
  //     .then((res) => {
  //       if (res.data.loggedIn) {
  //         auth.setAuthState({ role: res.data.role, email: res.data.email });
  //       }
  //     })
  //     .catch((err) => {
  //       if (!skipAuthCheck(router.pathname)) {
  //         router.push("/Login");
  //       }
  //       // return;
  //     });
  // }, []);

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
