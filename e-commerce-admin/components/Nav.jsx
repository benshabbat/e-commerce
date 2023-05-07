import Link from "next/link";
import React from "react";
import { FaStore,FaHome,FaCog,FaClipboardList,FaBoxOpen } from "react-icons/fa";
const Nav = () => {
  return (
    <aside className="text-white p-4">
      <Link href={"/"} className="flex">
        <FaStore />
        <span>
          E commerce Admin
        </span>
      </Link>
      <nav>
        <Link href={"/"} className="flex">
          <FaHome/>
        Dashboard
        </Link>
        <Link href={"/orders"} className="flex">
          <FaClipboardList/>
        Orders
        </Link>
        <Link href={"/products"} className="flex">
          <FaBoxOpen/>
        Products
        </Link>
        <Link href={"/settings"} className="flex">
          <FaCog/>
        Settings
        </Link>
      </nav>

    </aside>
  );
};

export default Nav;
