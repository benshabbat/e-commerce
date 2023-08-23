import { Children } from "react";
import Login from "@/components/Login";

import Nav from "@/components/Nav";
import { useSession } from "next-auth/react";
const Layout = ({ children }) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <Login />
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-3 mr-3 mb-3 rounded-lg p-4">     
        {children}
      </div>
    </div>
  );
};

export default Layout;
