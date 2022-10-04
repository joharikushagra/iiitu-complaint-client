import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";
import { AuthContext, AuthProvider } from "../../context/auth";
import Login from "../Login";
import Card from "../../components/Card";
import { axiosInstance } from "../../utils/Axios";

const tabs = [
  { name: "My Complaints", href: "/complaints" },
  { name: "Create Complaint", href: "/complaints?create=true" },
  { name: "Logout", href: "/Login" },
];

const Complaints = () => {
  const router = useRouter();
  const create = router.query?.create;
  const isCreate = create === "true";
  const auth = useContext(AuthContext);
  const [complaints, setComplaints] = useState(null);

  useEffect(() => {
    axiosInstance.get("/complaints").then((res) => {
      console.log(res.data);
      setComplaints(res.data.complains);
    });
  }, []);

  return (
    <Layout tabs={tabs}>
      {!isCreate ? (
        <ViewComplaints>
          {complaints &&
            complaints.map((c) => (
              <Card id={c._id} key={c._id} complaint={c} />
            ))}
        </ViewComplaints>
      ) : (
        <NewComplaint />
      )}
    </Layout>
  );
};

export default Complaints;
