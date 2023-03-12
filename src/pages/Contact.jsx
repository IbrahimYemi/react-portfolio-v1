import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="md:px-8 p-4 bg-neutral-100 min-h-screen">
        <h1 className="text-2xl md:text-4xl text-slate-900 font-extrabold md:w-3/5 mx-auto text-center mb-4">
          Get to know me, I promise you not to disappoint!
        </h1>
        <div className="flex flex-col md:flex-row h-full md:w-5/6 w-full mx-auto py-8 items-start justify-between">
          <img
            src="/images/me.jpg"
            alt="Ibrahim Sarafadeen Opeyemi"
            className="w-auto h-96 rounded mx-auto mb-4"
          />
          <div className="flex flex-col px-8">
            <h3 className="md:text-3xl text-xl font-bold text-slate-900 mb-2">
              IBRAHIM SARAFADEEN OPEYEMI
            </h3>
            <small className="text-neutral-700 text-base mt-2 italic font-thin font-mono mb-0">
              FULLSTACK SOFTWARE DEVELOPER
            </small>
            <small className="text-neutral-700 text-xs mb-2 font-semibold underline">
              I believe every idea is codeable, if I don't know how, someone
              else surely does!
            </small>
            <p className="h-auto font-medium text-slate-800">
              Hello there! My name is Ibrahim Sarafadeen Opeyemi, and I'm a Full
              Stack Software Developer with a passion for creating stunning
              applications using Laravel, PHP, React, JavaScript, and other
              related languages and frameworks. I'm on a mission to change the
              world, one line of code at a time, and I'm excited to invite you
              to come along for the ride.
              <br />
              <br />
              As someone who is deeply committed to my craft, I take great pride
              in my ability to transform ideas into elegant and efficient code.
              I believe that my skills, combined with my unrelenting
              determination to exceed expectations, make me an ideal candidate
              for any project. Whether you're looking to create a dynamic web
              application or a user-friendly mobile app, I'm confident that I
              have what it takes to deliver exceptional results that are
              tailored to your unique needs.
              <br />
              <br />
              Although I'm based in Nigeria, I'm open to opportunities anywhere
              in the world, and I'm not afraid to take on challenges that
              require sponsorship for work visas. My ultimate goal is to work
              with like-minded individuals who share my passion for innovation
              and my desire to make a meaningful impact on the world.
              <br />
              So what do you say? Are you willing to let me join you on this
              exciting journey? Let's work together to create something
              amazing!"
            </p>
            <span className="mt-4">
              <a
                href="mailto:ibrahimsharafadeen95@gmail.com?Subject=Hello Yemi, Let's work together!"
                className={`bg-gradient-to-br from-neutral-500 to-slate-900 p-3 capitalize rounded-md  text-xs text-white font-bold text-center cursor-pointer my-2 w-28 mr-2`}
              >
                Hire me!
              </a>
              <a
                href="https://drive.google.com/folderview?id=17hvSDL9nEajCblZ0raJa_T6KxbxsoqMX"
                target="blank"
                className={`bg-gradient-to-br from-neutral-500 to-slate-900 p-3 capitalize rounded-md  text-xs text-white font-bold text-center cursor-pointer my-2 w-28 ml-2`}
              >
                Download CV!
              </a>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
