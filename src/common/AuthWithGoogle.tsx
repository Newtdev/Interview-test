import React from "react";
import Google from "assets/svg/Google.svg";
import { Link } from "react-router-dom";

export default function AuthWithGoogle() {
  return (
    <Link
      to={`${process.env.REACT_APP_KREXT_BASE_URL}/auth/google`}
      type="button"
      className="flex items-center justify-center w-full p-3 my-3 text-black bg-white rounded-md shadow-md gap-x-4 shadow-gray-200"
    >
      <img src={Google} className="" alt="google " />
      Continue with google
    </Link>
  );
}
