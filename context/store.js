import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { autoLogin } from "../pages/lib/api";

const StoreContext = React.createContext(null);
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
    const router = useRouter()
  const [state, setState] = useState({
    user: {
      email: "",
      role: -1,
    },
    complaints: []
  });

  const isUserAuthenticated = () => {
    return false;
  };

  useEffect(() => {
    autoLogin(setState, router)
  }, []);
  return (
    <Provider
      value={{
        state,
        setState,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { StoreContext, StoreProvider };
