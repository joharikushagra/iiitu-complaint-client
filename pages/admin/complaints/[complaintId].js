import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout";
import ViewComplaints from "../../../components/ViewComplaints";

const tabs = [
  { name: "Pending", href: "/admin/complaints" },
  { name: "Resolved", href: "/admin/complaints?resolved=true" },
  { name: "Logout", href: "/admin/Login" },
];

const ComplaintDetails = () => {
  const router = useRouter();
  const id = router.query.complaintId;
  return (
    <Layout tabs={tabs}>
      <ViewComplaints>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <div className="block text-lg font-medium text-gray-700">
                    Complaint Type
                  </div>
                  <div>Electrical</div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="block text-lg font-medium text-gray-700">
                    Complaint
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="block text-lg font-medium text-gray-700">
                    Attachments/Links{" "}
                  </div>
                  <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
              <span className="mr-4 text-lg font-medium text-gray-700">
                Status
              </span>
              <span className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Pending
              </span>
            </div>

            <div className=" px-4 py-3 text-left sm:px-6 mb-0">
              <span className="block text-lg font-medium text-gray-700">
                Change Status
              </span>
              <select
                id="complaint-type"
                name="complaint-type"
                autoComplete="complaint-type"
                className="mt-1 w-2/3 block rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="PENDING">Pending</option>
                <option value="PROGRESS" disabled={true}>
                  Progress
                </option>
                <option value="RESOLVED">Resolved</option>
              </select>
            </div>
            <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </ViewComplaints>
    </Layout>
  );
};

export default ComplaintDetails;
