import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/route";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getApplicant } from "@/app/action/getApplicant";
import UserDashboard from "@/components/userComponent/UserDashboard";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("no user session found");
  } else {
    //console.log(session);
  }
  const applicant = await getApplicant(session.user.id);

  return (
    <div>
      <UserDashboard applicant={applicant} />
    </div>
  );
};

export default page;
