import React from "react";
import Link from "next/link";
import {
  FaStore,
  FaHome,
  FaCog,
  FaClipboardList,
  FaBoxOpen,
} from "react-icons/fa";
import Logout from "@/components/Logout";
const Nav = () => {
  const inactiveLink="flex gap-1 p-1"
  const activeLink=inactiveLink+" bg-white text-blue-900 rounded-md"
  return (
    <aside className="text-white p-4">
      <Link href={"/"} className="flex mb-6">
        <FaStore className="h-6 w-6 mr-2" />
        <span>E commerce Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={"/"} className={inactiveLink}>
          <FaHome className="h-6 w-6 mr-2" />
          Dashboard
        </Link>
        <Link href={"/orders"} className={inactiveLink}>
          <FaClipboardList className="h-6 w-6 mr-2" />
          Orders
        </Link>
        <Link href={"/products"} className={inactiveLink}>
          <FaBoxOpen className="h-6 w-6 mr-2" />
          Products
        </Link>
        <Link href={"/settings"} className={inactiveLink}>
          <FaCog className="h-6 w-6 mr-2" />
          Settings
        </Link>
      </nav>
      <Logout />
    </aside>
  );
};

export default Nav;
