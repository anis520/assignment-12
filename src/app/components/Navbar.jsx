import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 rounded-box  px-20">
        <div className="flex-1 px-2 lg:flex-none  ">
          <Link href="/">
            <p className="text-lg font-bold cursor-pointer">Blogapp</p>
          </Link>
        </div>
        <div className="flex justify-end flex-1 px-2 gap-2">
          <div className="flex items-stretch space-x-2">
            {" "}
            <Link href="/blog">
              <button className="btn bg-gray-800  btn-ghost rounded-btn">
                Blog
                <div className="badge">100</div>
              </button>
            </Link>
            <Link href="/about">
              <p className="btn btn-ghost rounded-btn bg-gray-800">About</p>
            </Link>
            <Link href="/contact">
              <p className="btn btn-ghost rounded-btn bg-gray-800">Contact</p>
            </Link>
            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Dropdown
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
