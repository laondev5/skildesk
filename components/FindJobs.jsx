"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Building, DollarSign, Clock } from "lucide-react";
import { JobType, experienceLevels } from "@/lib/parameters";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

// Mock data for jobs
const allJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    category: "software-developer",
    location: "New York, NY",
    salary: "$80,000 - $120,000 a year",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "We are seeking a skilled Frontend Developer to join our dynamic team. The ideal candidate should have strong experience with React, TypeScript, and modern CSS frameworks.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataInsights",
    category: "data-analysis",
    location: "San Francisco, CA",
    salary: "$70,000 - $100,000 a year",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "DataInsights is looking for a Data Analyst to help interpret complex data sets and provide actionable insights to our clients.",
  },
  {
    id: 3,
    title: "UI Designer",
    company: "DesignStudio",
    category: "ui-design",
    location: "Remote",
    salary: "$60,000 - $90,000 a year",
    type: "Contract",
    posted: "1 week ago",
    description:
      "Join our creative team as a UI Designer. Youll be responsible for creating beautiful, intuitive interfaces for web and mobile applications.",
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "ServerSolutions",
    category: "software-developer",
    location: "Berlin, Germany",
    salary: "€65,000 - €95,000 a year",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "ServerSolutions is seeking a Backend Engineer to develop and maintain our server-side logic and integrate our applications with web services.",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "WebWizards",
    category: "software-developer",
    location: "Toronto, Canada",
    salary: "CAD 75,000 - CAD 110,000 a year",
    type: "Full-time",
    posted: "5 days ago",
    description:
      "Were looking for a Full Stack Developer who is comfortable with both front and back end programming. Experience with React and Node.js is required.",
  },
  // Add more job listings as needed
];

// const jobTypes = [
//   "Full-time",
//   "Part-time",
//   "Contract",
//   "Temporary",
//   "Internship",
// ];
//const experienceLevels = ["Entry level", "Mid level", "Senior level"];

export default function FindJobs({ jobsData }) {
  console.log(jobsData);
  const [jobs, setJobs] = useState(jobsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const jobsPerPage = 5;

  useEffect(() => {
    const filteredJobs = jobsData.filter(
      (job) =>
        (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.brandName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        job.location.toLowerCase().includes(locationTerm.toLowerCase()) &&
        (selectedJobTypes.length === 0 ||
          selectedJobTypes.includes(job.jobType)) &&
        (selectedExperienceLevels.length === 0 ||
          selectedExperienceLevels.some((level) =>
            job.title.toLowerCase().includes(level.toLowerCase())
          ))
    );
    setJobs(filteredJobs);
    setCurrentPage(1);
  }, [searchTerm, locationTerm, selectedJobTypes, selectedExperienceLevels]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleExperienceLevel = (level) => {
    setSelectedExperienceLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find jobs</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="City, state, or zip code"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="w-full md:w-auto">Find Jobs</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 space-y-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Job Type</h2>
              {JobType.map((type) => (
                <div key={type} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={type}
                    checked={selectedJobTypes.includes(type)}
                    onCheckedChange={() => toggleJobType(type)}
                  />
                  <label
                    htmlFor={type}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Experience Level</h2>
              {experienceLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={level}
                    checked={selectedExperienceLevels.includes(level)}
                    onCheckedChange={() => toggleExperienceLevel(level)}
                  />
                  <label
                    htmlFor={level}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <div className="space-y-4 mb-8">
            {currentJobs.map((job) => (
              <Link
                key={job.id}
                href={`/available_jobs/${job?.id}`}
                className="py-4"
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{job?.title}</h2>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="mr-2 h-4 w-4" />
                      <span className="mr-4">{job?.brandName}</span>
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{job?.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <DollarSign className="mr-2 h-4 w-4" />

                      <span className="mr-4">
                        {job?.payFrom} - {job?.payTo}
                      </span>

                      <Clock className="mr-2 h-4 w-4" />
                      <span>
                        {formatDistanceToNow(job?.createdAt, {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div
                      className="w-[90%] ProseMirror whitespace-pre-line line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: job?.Description }}
                    />
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{job?.jobType}</Badge>
                      <Badge variant="secondary">{job?.jobCategories}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {Array.from(
              { length: Math.ceil(jobs.length / jobsPerPage) },
              (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
