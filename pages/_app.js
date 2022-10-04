import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
