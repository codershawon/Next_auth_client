import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <>
   {session?.user &&(
       <div>
       <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
       <p className="text-center">Logged In user email: {session?.user?.email}</p>
       <Image className="mx-auto" src={session?.user?.image || "/default-image.png"} height={100} width={100} alt="userImage"/>
     </div>
    )}
    </>
  );
};

export default DashboardPage;
