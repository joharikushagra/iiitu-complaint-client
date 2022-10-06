import { useContext, useEffect } from "react";
import { StoreContext, StoreProvider } from "../context/store";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { roleCheck } from "../utils";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <ProtectedRenderer Component={Component} pageProps={pageProps} />
    </StoreProvider>
  );
}

const ProtectedRenderer = ({ Component, pageProps }) => {
  const store = useContext(StoreContext);
  const router = useRouter();
  let canAccessPage = true;
  useEffect(() => {
    if (
      router.pathname.startsWith("/admin") &&
      roleCheck.isStudent(store.state.user.role)
    ) {
      canAccessPage = false;
    }

    if (
      router.pathname.startsWith("/complaints") &&
      roleCheck.isAdmin(store.state.user.role)
    ) {
      canAccessPage = false;
    }

    if (!canAccessPage) {
      // redirect page on role
      if (roleCheck.isAdmin(store.state.user.role)) {
        router.push("/admin/complaints");
      } else {
        router.push("/complaints");
      }
      return;
    }

    return () => {};
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
