import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/Axios";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ role: "" });

  const isUserAuthenticated = () => {
    if (!authState.role) return 0;
    return 1;
  };

  //   useEffect(() => {
  //     axiosInstance
  //       .get("/auth/autoLogin")
  //       .then((res) => {
  //         if (res?.data?.loggedIn) {
  //           auth.setAuthState({ role: res?.data?.role });
  //           router.push("/complaints");
  //         } else window.alert("res?.data?.message");
  //       })
  //       .catch((err) => window.alert("err.response?.data?.message"));
  //   }, []);

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
