import Link from "next/link";
import React from "react";

const Navbar = () => {
  const catagories = (
    <>
      <li>
        <Link className="font-bold text-md" href="/products/cpu">
          CPU
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/motherboard">
          Motherboard
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/ram">
          RAM
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/power-supply-unit">
          Power Supply Unit
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/storage-device">
          Storage Device
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/monitor">
          Monitor
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/products/others">
          Others
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-success text-slate-700">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold text-md" href="/">
                Home
              </Link>
            </li>
            <li>
              <a className="font-bold text-md">Catagories</a>
              <ul className="p-2">{catagories}</ul>
            </li>
        
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold">
          PCWizardry
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-bold text-md" href="/">
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="font-bold text-md">Catagories</summary>
              <ul className="p-2">{catagories}</ul>
            </details>
          </li>
        
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  btn-neutral">Build Your PC</a>
      </div>
    </div>
  );
};

export default Navbar;
