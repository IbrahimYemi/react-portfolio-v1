import React from "react";
import work from "../assets/experience";
import JobCard from "../components/JobCard";
import Layout from "../components/layout";

export default function Experiences() {
  return (
    <Layout>
        <div className="flex flex-col items-center justify-center w-full ">
            <h1 className="text-xl md:text-3xl text-slate-900 font-extrabold w-5/6 md:w-3/5 text-center mb-4">It is a fact that every senior starts somewhere! Here are the bits of those amazing organizations that trusted me enough to give me the platform to grow, learn and impact. I'll be forever grateful.</h1>
            <div className="flex flex-wrap items-center justify-center">
                {
                    work.map((job, i) => {
                        return <JobCard key={i} job={job} />
                    })
                }
            </div>
        </div>
    </Layout>
  );
}
