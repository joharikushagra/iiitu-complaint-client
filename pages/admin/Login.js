import React from "react";
import Image from "next/image";
import { axiosInstance } from "../../utils/Axios";
import { useRouter } from "next/router";

const Login = (props) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    if (password.length < 6)
      return window.alert("Password must be atleast 6 characters");

    const payload = {
      email,
      password,
    };

    axiosInstance
      .post("/auth/login", payload)
      .then((res) => {
        if (res?.status === 200) router.push("/complaints");
        else window.alert(res?.data?.message);
      })
      .catch((err) => {
        console.error(err);
        // window.alert(err.response?.data?.message);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form
        className="xs:w-1/2 lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
        <article className="prose text-center prose-h1:text-gray-700 my-6">
          <h1>IIITU Complaints Portal Admin Login</h1>
        </article>
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
        <div className="mb-6">
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
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            forgot Password?
          </a> */}
        </div>
        <div className="mt-4 flex items-center justify-between">
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button> */}
          <div className="text-blue-600 font-semibold">Not an account?</div>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 IIITU All rights reserved.
      </p>
    </div>
  );
};

export default Login;
