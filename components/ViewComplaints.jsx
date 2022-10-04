import React from "react";
import Card from "./Card";

const ViewComplaints = ({ children, dropdown }) => {
  return (
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* <h1 className="text-lg text-neutral-600">
              Here is where you put your stuff
            </h1> */}
            {dropdown}
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-2">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewComplaints;
