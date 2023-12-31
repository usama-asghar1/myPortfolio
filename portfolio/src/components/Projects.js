"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { useState } from "react";

const projects = [
  {
    name: "Eco Kitchen",
    description: "A full-stack mobile app aimed to help users with their food consumption, reduce waste and cut costs.",
    image: "/ecokitchen.png",
    github: "https://github.com/usama-asghar1/EcoKitchen",
    link: "https://eco-kitchen.netlify.app/",
    page: "/ecokitchen",    
    group: true,
  },
  {
    name: "Pokemon Deck",
    description: "IN PROGRESS: A full-stack app that allows users to create their own Pokemon decks, and sort, filter and delete them.",
    image: "/inProgress.jpg",
    github: "https://github.com/usama-asghar1/PokemonDeck",  
    link: "https://pokemondeck-usama.netlify.app/",
    group: false,
  },
  {
    name: "Bootcampers Survival Guide",
    description: "A frontend app designed to help SoC bootcampers find Q&A for topics from a specific week of the course.",
    image: "/bootcamperssurvivalguide.png",
    github: "https://github.com/usama-asghar1/BootcampersSurvivalGuide",
    link: "https://bootcampers-survival-guide.netlify.app",
    page: "/bootcamperssurvivalguide",
    group: true,    
  },

  {
    name: "Pool Scoreboard",
    description: "A full stack app to help me and my friends play 8 ball pool and track the scores in a table format.",
    image: "/pool.png",
    github: "https://github.com/usama-asghar1/PoolScoreboard.git",
    link: "https://cottagepool.netlify.app/",
    page: "/pool",
    group: false,
  },

  {
    name: "My Portfolio",
    description: "My portfolio website created with Next v13 and Tailwind CSS.",
    image: "/portfolio.png",
    github: "https://github.com/usama-asghar1/myPortfolio",
    link: "https://usama-asghar.netlify.app/",
    page: "/myportfolio",    
    group: false,
  },
  {
    name: "Recipe Library",
    description: "A full-stack app that allows users to create their own recipes, read them and delete them using Node.",
    image: "/recipelibrary.png",
    github: "https://github.com/usama-asghar1/recipelibrary",
    group: false,
  },
  // {
  //   name: "Weather App",
  //   description: "A very basic weather app that allows users to search for a city and get the current weather, created in TypeScript.",
  //   image: "/weatherapp.png",
  //   github: "https://github.com/usama-asghar1/weatherapp",

  // },
]

const Projects = () => {

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") {
      return true; 
    } else if (filter === "solo") {
      return !project.group; 
    } else if (filter === "group") {
      return project.group; 
    }
  });

  return (
    <section id="projects">
  
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="my-4">
        <label className="mr-2">Filter Projects:</label>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
        </select>
      </div>

      <div className="flex flex-col space-y-28">
        {filteredProjects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                  <div>
      {project.link ? (
        <Link href={project.link}>
          <Image
            src={project.image}
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl shadow-xl hover:opacity-70"
          />
        </Link>
      ) :  <Image
            src={project.image}
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl shadow-xl"
          />}
     
    </div>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div>
      {project.page ? (
        <Link href={project.page}>
          <p className="text-teal-600 font-semibold underline hover:no-underline cursor-pointer">
            Click for More Info
          </p>
        </Link>
      ) : null}
      <br />
     
    </div>
    <div className="flex space-x-4">
  <Link href={project.github} target="_blank" className="flex flex-row items-center text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer">
    <BsGithub size={30} className="mr-1" /> GitHub
  </Link>
  {project.link && (
    <Link href={project.link} target="_blank" className="flex flex-row items-center text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer">
      <BsArrowUpRightSquare size={30} className="mr-1" /> Live App
    </Link>
  )}
</div>

                  </div>
                </div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projects