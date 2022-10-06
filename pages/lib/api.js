import { roleCheck } from "../../utils";
import { axiosInstance } from "../../utils/Axios";

export const autoLogin = (setState, router) => {
  return axiosInstance
    .get("/auth/autoLogin")
    .then((res) => {
      if (res.data.loggedIn) {
        setState((ps) => ({
          ...ps,
          user: { role: res.data.role, email: res.data.email },
        }));
        if (roleCheck.isAdmin(res.data.role)) {
          router.push("/admin/complaints");
          return;
        }
        if (roleCheck.isStudent(res.data.role)) {
          router.push("/complaints");
          return;
        }
      }
    })
    .catch((err) => {
      // auto login failed
      if (["/Login", "/Signup"].includes(router.pathname)) {
        // do nothing
      } else {
        // redirect to login page
        router.push("/Login");
      }
    });
};

export const logout = (router, setState) => {
  return axiosInstance
    .post("/auth/logout")
    .then((res) => {
      // alert(res.data.message);
      setState({
        user: {
          email: "",
          role: -1,
        },
        complaints: [],
      });
      router.push("/Login");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const login = (credentials, setState, router) => {
  axiosInstance
    .post("/auth/login", credentials)
    .then((res) => {
      if (res?.status === 200) {
        setState((ps) => ({
          ...ps,
          user: { role: res.data.role, email: res.data.email },
        }));
        router.push("/complaints");
      } else {
        console.log(res);
        alert("Something went wrong");
      }
    })
    .catch((err) => {
      console.log({ err });
      alert(err.response.data.message);
    });
};

export const fetchAllComplaints = (setState) => {
  axiosInstance.get("/complaints").then((res) => {
    setState((ps) => ({ ...ps, complaints: res.data.complains }));
  });
};
