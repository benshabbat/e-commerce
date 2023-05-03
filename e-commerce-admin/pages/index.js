import Login from "@/components/Login";
import Logout from "@/components/Logout";
import Nav from "@/components/Nav";
import { useSession} from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <Login />
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen">
      <Nav />
      <Logout />
      Signed in as {session.user.email}
    </div>
  );
}
