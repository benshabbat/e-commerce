import Link from "next/link";
import {
  FaStore,
  FaHome,
  FaCog,
  FaClipboardList,
  FaBoxOpen,
} from "react-icons/fa";
import Logout from "@/components/Logout";
import { useRouter } from "next/router";
const Nav = () => {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-md";
  const {pathname} = useRouter();
  return (
    <aside className="text-white p-4">
      <Link href={"/"} className="flex mb-6">
        <FaStore className="h-6 w-6 mr-2" />
        <span>E commerce Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={"/"} className={pathname==="/"?activeLink:inactiveLink}>
          <FaHome className="h-6 w-6 mr-2" />
          Dashboard
        </Link>
        <Link href={"/orders"} className={pathname.includes("/orders")?activeLink:inactiveLink}>
          <FaClipboardList className="h-6 w-6 mr-2" />
          Orders
        </Link>
        <Link href={"/products"} className={pathname.includes("/products")?activeLink:inactiveLink}>
          <FaBoxOpen className="h-6 w-6 mr-2" />
          Products
        </Link>
        <Link href={"/settings"} className={pathname.includes("/settings")?activeLink:inactiveLink}>
          <FaCog className="h-6 w-6 mr-2" />
          Settings
        </Link>
      </nav>
      <Logout />
    </aside>
  );
};

export default Nav;
