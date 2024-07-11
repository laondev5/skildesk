"use client"
import Head from 'next/head'
import React from 'react'
import SearchFilter from './SearchFilter'
import JobList from './JobListing'
import JobDetail from './JobDetails'
import { useState } from 'react'

const Home = ({jobs}) => {
    console.log(jobs)
    const [jobId, setJobId] = useState("")
  return (
    <div className="flex">
      <Head>
        <title>HuntJobs</title>
      </Head>
      
      <div className="flex flex-col w-4/5">
        <SearchFilter />
        <div className="flex">
          {/* //<JobList /> */}
          <JobList jobs={jobs} setJobId={setJobId} />
          <JobDetail jobs={jobs} jobId={jobId}/>
        </div>
      </div>
    </div>
  )
}

export default Home