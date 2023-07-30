import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();

  const catagories = (
    <>
      <li>
        <Link className="font-bold text-md" href="/catagories/cpu">
          CPU
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/catagories/motherboard">
          Motherboard
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/catagories/ram">
          RAM
        </Link>
      </li>
      <li>
        <Link
          className="font-bold text-md"
          href="/catagories/power-supply-unit"
        >
          Power Supply Unit
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/catagories/storage-device">
          Storage Device
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/catagories/monitor">
          Monitor
        </Link>
      </li>
      <li>
        <Link className="font-bold text-md" href="/catagories/others">
          Others
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-success text-slate-700">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={2} className="btn btn-ghost lg:hidden">
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
            tabIndex={3}
            style={{ zIndex: "1000" }}
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
        <ul className="menu menu-horizontal px-1" style={{ zIndex: "1000" }}>
          <li>
            <Link className="font-bold text-md" href="/">
              Home
            </Link>
          </li>
          <li tabIndex={3}>
            <details>
              <summary className="font-bold text-md">Catagories</summary>
              <ul className="p-2">{catagories}</ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <Link href={"/build-my-pc"} className="btn  btn-neutral">
          Build Your PC
        </Link>

        {!data?.user ? (
          <Link className="font-bold text-md btn btn-outline" href="/login">
            Login
          </Link>
        ) : (
          <button
            className="font-bold text-md btn btn-outline"
            onClick={() => signOut()}
          >
            SignOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
