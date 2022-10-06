import React from "react";
import Image from "next/image";
import { axiosInstance } from "../utils/Axios";

const Signup = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPassword?.value;
    const phone = Number(e.target.phone?.value);
    const rollno = Number(e.target.rollno?.value);

    if (password.length < 6)
      return window.alert("Password must be atleast 6 characters");
    if (password !== confirmPassword)
      return window.alert("Passwords not match");

    const payload = {
      name,
      email,
      password,
      confirmPassword,
      phone,
      rollno,
    };

    axiosInstance
      .post("/users", payload)
      .then((res) => {
        console.log({ res });
        // window.alert(res?.data?.message);
        window.location.replace("/Login");
      })
      .catch((err) => {
        console.error(err);
        // window.alert(err.response?.data?.message);
      });
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form
        className="xs:w-1/2 lg:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex py-2 mb-4 justify-center align-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/c/cf/Iiit-una-logo.png"
            alt="IIIT UNA"
            width={120}
            height={120}
          />
        </div>
        <div className="flex justify-center">
          <article className="prose  prose-h1:text-gray-700 my-6">
            <h1>IIITU Complaints Portal</h1>
          </article>
        </div>
        <div className="grid md:grid-cols-2 md:gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              required
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Institute Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              required
              type="email"
              placeholder="Your Email"
            />
          </div>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="rollno"
            >
              Institute Roll No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rollno"
              name="rollno"
              required
              type="text"
              placeholder="Your Roll No"
            />
          </div> */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              required
              type="tel"
              placeholder="Your Phone"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              required
              name="password"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              required
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 IIITU All rights reserved.
      </p>
    </div>
  );
};

export default Signup;
