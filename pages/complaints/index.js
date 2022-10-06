import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import { StoreContext } from "../../context/store";
import { fetchAllComplaints } from "../lib/api";

const tabs = [
  { name: "My Complaints", href: "/complaints" },
  { name: "Create Complaint", href: "/complaints?create=true" },
  { name: "Logout", href: "/logout" },
];

const Complaints = () => {
  const router = useRouter();
  const create = router.query?.create;
  const isCreate = create === "true";
  const store = useContext(StoreContext);


  useEffect(() => {
    fetchAllComplaints(store.setState)
  }, []);

  return (
    <Layout tabs={tabs}>
      {!isCreate ? (
        <ViewComplaints>
          {store.state.complaints &&
            store.state.complaints.map((c) => (
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
