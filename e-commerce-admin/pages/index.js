import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between ">
        <h2>
          Hello <b>{session?.user?.name}</b>
        </h2>
        <div className="flex gap-1">
          <img
            src={session?.user?.image}
            alt="imgAccount"
            className="w-16 h-16 rounded-md"
          />
          {/* {session?.user?.name} */}
        </div>
      </div>
    </Layout>
  );
}
