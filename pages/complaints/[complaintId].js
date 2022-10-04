import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ViewComplaints from "../../components/ViewComplaints";
import { axiosInstance } from "../../utils/Axios";

const tabs = [
  { name: "My Complaints", href: "/complaints" },
  { name: "Create Complaint", href: "/complaints?create=true" },
  { name: "Logout", href: "/Login" },
];

const ComplaintDetails = () => {
  const router = useRouter();
  const { complaintId } = router.query;
  const [complaintDetails, setComplaintDetails] = useState(null);

  useEffect(() => {
    if (!complaintId) return;
    axiosInstance
      .get(`/complaint/${complaintId}`)
      .then((res) => setComplaintDetails(res?.data?.complaint))
      .catch((err) => console.log({ err }));
  }, [complaintId]);

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
                  <div>{complaintDetails?.type}</div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="block text-lg font-medium text-gray-700">
                    Complaint
                  </div>
                  <div>{complaintDetails?.complaint}</div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="block tex t-lg font-medium text-gray-700">
                    Attachments/Links{" "}
                  </div>
                  <ul>
                    {complaintDetails?.links?.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
              <span className="block text-lg font-medium text-gray-700">
                Status
              </span>
              <div
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {complaintDetails?.status}
              </div>
            </div>
          </div>
        </div>
      </ViewComplaints>
    </Layout>
  );
};

export default ComplaintDetails;
