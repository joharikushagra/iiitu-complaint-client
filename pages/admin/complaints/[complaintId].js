import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import ViewComplaints from "../../../components/ViewComplaints";
import { axiosInstance } from "../../../utils/Axios";

const tabs = [
  { name: "Pending", href: "/admin/complaints" },
  { name: "Resolved", href: "/admin/complaints?resolved=true" },
  { name: "Logout", href: "/logout" },
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

  const handleUpdate = () => {
    const status = document.getElementById('complaint-status').value;
    const remarks = document.getElementById('complaint-remark').value;

    axiosInstance
      .post(`/complaints/update/${complaintDetails._id}`, {status, remarks})
      .then(res => {
        setComplaintDetails(res.data.complain)
        alert(res.data.message)
      })
      .catch(err => alert("Something went wrong"))
  }

  return (
    <Layout tabs={tabs}>
      {complaintDetails ? (
        <ViewComplaints>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <div className="block text-lg font-medium text-gray-700">
                      Complaint Type
                    </div>
                    <div>{complaintDetails.type}</div>
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <div className="block text-lg font-medium text-gray-700">
                      Complaint
                    </div>
                    <div>{complaintDetails.complaint}</div>
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <div className="block text-lg font-medium text-gray-700">
                      Attachments/Links{" "}
                    </div>
                    <ul>
                      {complaintDetails.links.map((link) => (
                        <li key={link}><a href={link} target="__blank">{link}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
                <span className="mr-4 text-lg font-medium text-gray-700">
                  Status
                </span>
                <span className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {complaintDetails.status}
                </span>
              </div>

              <div className=" px-4 py-3 text-left sm:px-6 mb-0">
                <span className="block text-lg font-medium text-gray-700">
                  Change Status
                </span>
                <select
                  id="complaint-status"
                  name="complaint-status"
                  autoComplete="complaint-type"
                  className="mt-1 w-2/3 block rounded-md border border-gray-300 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="PENDING">Pending</option>
                  <option value="PROGRESS">
                    Progress
                  </option>
                  <option value="RESOLVED">Resolved</option>
                  <option value="ESCALATED">Escalated</option>
                </select>
              </div>
              <div class="px-4 py-3 text-left sm:px-6 mb-0">
                <span className="block text-lg font-medium text-gray-700">
                  Add remark/feedback
                </span>
                <textarea
                  id="complaint-remark"
                  name="remark"
                  required
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder={complaintDetails.remarks ?? "Description for your complaint"}
                ></textarea>
              </div>
              <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
                <button
                onClick={handleUpdate}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </ViewComplaints>
      ) : (
        <div>Loading..</div>
      )}
    </Layout>
  );
};

export default ComplaintDetails;
