import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/Axios";
import { useRouter } from "next/router";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState({ role: "", email: "" });

  const isUserAuthenticated = () => {
    if (!authState.role) return 0;
    return 1;
  };

  console.log({ authState });

  useEffect(() => {
    axiosInstance
      .get("/auth/autoLogin")
      .then((res) => {
        if (res.data.loggedIn) {
          auth.setAuthState({ role: res.data.role, email: res.data.email });
          router.push("/complaints");
        } else {
          router.push("/Login");
        }
      })
      .catch((err) => {
        router.push("/Login");
      });
  }, []);

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
