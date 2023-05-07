import Link from "next/link";
import React from "react";
import { FaStore,FaHome,FaCog,FaClipboardList,FaBoxOpen } from "react-icons/fa";
const Nav = () => {
  return (
    <aside className="text-white p-4">
      <Link href={"/"} className="flex">
        <FaStore className="h-6 w-6 mr-2" />
        <span>
          E commerce Admin
        </span>
      </Link>
      <nav>
        <Link href={"/"} className="flex">
          <FaHome className="h-6 w-6 mr-2"/>
        Dashboard
        </Link>
        <Link href={"/orders"} className="flex">
          <FaClipboardList className="h-6 w-6 mr-2"/>
        Orders
        </Link>
        <Link href={"/products"} className="flex">
          <FaBoxOpen className="h-6 w-6 mr-2"/>
        Products
        </Link>
        <Link href={"/settings"} className="flex">
          <FaCog className="h-6 w-6 mr-2"/>
        Settings
        </Link>
      </nav>

    </aside>
  );
};

export default Nav;
