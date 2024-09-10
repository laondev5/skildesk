"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  BuildingIcon,
  DollarSignIcon,
  GlobeIcon,
} from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function JobDetailPage({ job }) {
  //console.log(job);
  const { data: session } = useSession({});
  const Router = useRouter();

  const handleClick = () => {
    if (session?.user?.role === "USER") {
      Router.push(`/user/${job?.id}`);
    } else if (session?.user?.role === "ADMIN") {
      Router.push("/admin");
    } else if (session?.user?.role === "VENDOR") {
      Router.push("/vendor");
    } else {
      Router.push("/login");
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <Button onClick={handleClick}>Apply Now</Button>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge variant="secondary" className="flex items-center gap-1">
                <BuildingIcon className="w-4 h-4" />
                {job.brandName}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                {job.location}
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-orange-200"
              >
                <BriefcaseIcon className="w-4 h-4 " />
                {job.jobType}
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-green-200"
              >
                <DollarSignIcon className="w-4 h-4 " />$
                {job.payFrom.toLocaleString()} - ${job.payTo.toLocaleString()}
              </Badge>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: job.Description }}
            />
          </Card>
        </div>
        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span>Posted on {job.createdAt.toLocaleDateString()}</span>
              </li>
              <li className="flex items-center gap-2">
                <BriefcaseIcon className="w-5 h-5 text-gray-500" />
                <span>{job.experienceLevels}</span>
              </li>
              <li className="flex items-center gap-2">
                <BuildingIcon className="w-5 h-5 text-gray-500" />
                <span>{job.industry}</span>
              </li>
              <li className="flex items-center gap-2">
                <GlobeIcon className="w-5 h-5 text-gray-500" />
                <a
                  href={`https://${job.webUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {job.webUrl}
                </a>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <Image
              src={job.coverImage}
              alt={job.brandName}
              width={100}
              height={100}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div
              className="w-[90%] ProseMirror whitespace-pre-line line-clamp-3"
              dangerouslySetInnerHTML={{ __html: job?.Description }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
