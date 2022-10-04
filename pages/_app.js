import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
