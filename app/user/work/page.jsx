// import { getAllJobs } from "../action/getAllJobs";
import { getAllJobs } from "@/app/action/getAllJobs";
import Home from "@/components/userComponent/Home";

const page = async () => {
  const jobs = await getAllJobs();
  //console.log(jobs);
  return (
    <div>
      <Home jobs={jobs} />
    </div>
  );
};

export default page;
