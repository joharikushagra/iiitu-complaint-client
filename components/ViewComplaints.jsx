import React from "react";

const ViewComplaints = () => {
  return (
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="text-lg text-neutral-600">
              Here is where you put your stuff
            </h1>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* <!-- Put your content here --> */}
            <div className="py-4">
              <div className="rounded-lg bg-gray-50 h-96"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewComplaints;
