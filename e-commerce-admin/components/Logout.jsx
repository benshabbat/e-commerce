import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 p-2 px-4 rounded-md"
    >
      Sign out
    </button>
  );
};

export default Logout;
