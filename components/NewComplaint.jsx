import { useRouter } from "next/router";
import React from "react";
import { axiosInstance } from "../utils/Axios";

const NewComplaint = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const complaintType = e.target["complaint-type"].value;
    const complaintDescription = e.target["description"].value;
    const complaintLinks = e.target["links"]?.value?.split(",");
    const payload = {
      type: complaintType,
      complaint: complaintDescription,
      links: complaintLinks,
    };

    axiosInstance
      .post("/complaints", payload)
      .then((res) => {
        console.log({ res });
        alert("Complaint Registered");
        router.push("/complaints");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="w-screen h-full  mt-10 sm:mt-0">
        <div className="flex justify-start sm:p-6 align-center mt-10">
          <article className="prose prose-stone md:prose-2xl sm:prose-lg">
            Complaint Form
          </article>
        </div>
        {/* <div className="md:grid md:grid-cols-2 md:gap-6"> */}
        <div className="">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Complaint Type
                      </label>
                      <select
                        id="complaint-type"
                        name="complaint-type"
                        autoComplete="complaint-type"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="CIVIL">Civil</option>
                        <option value="ELECTRICAL">Electrical</option>
                        <option value="IRRIGATION">Irrigation</option>
                        <option value="OTHERS">Others</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <div>
                        <label
                          for="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Complaint
                        </label>
                        <div class="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            required
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Description for your complaint"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <div>
                        <label
                          for="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Links: (eg- Drive)
                        </label>
                        <div class="mt-1">
                          <textarea
                            id="links"
                            name="links"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Please add comma separated links"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 text-left  sm:px-6 mb-0">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewComplaint;
