import React, { useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import NewComplaint from "../../components/NewComplaint";
import { useRouter } from "next/router";

const tabs = [
  { name: "Pending", href: "/admin/complaints" },
  { name: "Resolved", href: "/admin/complaints?resolved=true" },
  { name: "Logout", href: "/admin/Login" },
];

const Complaints = () => {
  const router = useRouter();
  const create = router.query?.create;
  return (
    <Layout tabs={tabs}>
      {" "}
      <ViewComplaints>
        <div class="w-2/3 col-span-6 sm:col-span-3 mb-4">
          <label
            for="complaint-type"
            class="block text-sm font-medium text-gray-700"
          >
            Filter by Type
          </label>
          <select
            id="complaint-type"
            name="complaint-type"
            autocomplete="complaint-type"
            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="CIVIL">Civil</option>
            <option value="ELECTRICAL">Electrical</option>
            <option value="IRRIGATION">Irrigation</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>
      </ViewComplaints>
    </Layout>
  );
};

export default Complaints;
