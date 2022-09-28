import React, { useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";

const tabs = [
  { name: "My Complaints", href: "/complaints" },
  { name: "Create Complaint", href: "/complaints?create=true" },
  { name: "Logout", href: "/Login" },
];

const Complaints = () => {
  const router = useRouter();
  const create = router.query?.create;
  const isCreate = create === "true";
  return (
    <Layout tabs={tabs}>
      {!isCreate ? <ViewComplaints /> : <NewComplaint />}
    </Layout>
  );
};

export default Complaints;
