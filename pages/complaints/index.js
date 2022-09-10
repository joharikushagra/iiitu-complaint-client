import React, { useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";

const Complaints = () => {
  const router = useRouter();
  const create = router.query?.create;
  const isCreate = create === "true";
  return <Layout>{!isCreate ? <ViewComplaints /> : <NewComplaint />}</Layout>;
};

export default Complaints;
