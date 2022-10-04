import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import Login from "../Login";
import Card from "../../components/Card";

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

  // useEffect(() => {
  //   auth.isUserAuthenticated()
  //     ? router.push("/complaints")
  //     : router.push("/Login");
  // }, []);

  return (
    <Layout tabs={tabs}>
      {!isCreate ? (
        <ViewComplaints>
          <Card id={1} />
          <Card id={2} />
          <Card id={3} />
        </ViewComplaints>
      ) : (
        <NewComplaint />
      )}
    </Layout>
  );
};

export default Complaints;
