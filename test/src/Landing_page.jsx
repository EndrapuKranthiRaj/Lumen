import React from 'react'
import person_writing from "./assets/person_writing.png";
import { Link } from "react-router-dom";

export default function Landing_page() {
    return (

  <main className="hero min-h-screen bg-gradient-to-r  flex flex-col-reverse md:flex-row items-center justify-around px-6">

    <div className="mt-4 md:mt-0 max-w-lg md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 leading-snug">
        Lets hack into the Problem Statement.
      </h1>
      <p className="text-lg text-gray-700">
      Lumen Hackathon is an innovative event where creative minds collaborate
       to develop groundbreaking solutions, fostering innovation and technological advancement.
      It provides a platform for participants to showcase their skills, network, and turn ideas into impactful projects.
      </p>
      <Link to="/lumen1" className="btn bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-500">
        Get Started
      </Link>
    </div>

    <div className="md:w-1/2 flex justify-center  md:-mt-24 md:-mr-52">
      <img src={person_writing}  alt="Journal Illustration" className=" w-1/2"/>
    </div>

  </main>
    );
}
