import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Eco Kitchen",
    description:
      "A full-stack mobile app aimed to help users with their food consumption, reduce waste and cut costs.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/usama-asghar1/EcoKitchen",
    link: "https://eco-kitchen.netlify.app/",
  },
  {
    name: "Bootcampers Survival Guide",
    description: "A frontend app designed to help SoC bootcampers find Q&A for topics from a specific week of the course.",
    image: "/platoio.png",
    github: "https://github.com/usama-asghar1/BootcampersSurvivalGuide",
    link: "https://bootcampers-survival-guide.netlify.app",
  },
]

const Projects = () => {
  return (
    <section id="projects">
  
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {/* <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link> */}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank" className="text-teal-600">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer "
                        />
                      </Link>
                      <Link href={project.link} target="_blank" className="text-teal-600">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
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