'use client'

import NavbarSubPage from '../../components/navbarSubPage'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import ImageCarousel from '../../components/ImageCarousel'

const project = 
{
    name: "Pool Scoreboard",
    description: "A full stack app to help me and my friends play 8 ball pool and track the scores in a table format.",
    image: "/pool.png",
    github: "https://github.com/usama-asghar1/PoolScoreboard.git",
    link: "https://cottagepool.netlify.app/",
    page: "/pool",

  }

const images = [
    { url: "pool.png", alt: "Pool Scoreboard App" },
    { url: "pool-notes.jpg", alt: "Notes App on iPhone" },
    { url: "pool-table1.png", alt: "Pool Game" },
    { url: "pool-table2.png", alt: "Pool Game Continued" },
  ];

export default function Ecokitchen() {
    return (
        <>
        
        <NavbarSubPage/>
        <main className="animate-fadeIn animation-delay-2">
        
        <div className="my-12 pb-12 pt-20 md:pt-16 md:pb-30">

        <h1 className="text-center font-bold text-4xl"> 
        {project.name}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          </h1>
           <div className="flex flex-row justify-center space-x-4">

           <Link href={project.github} target="_blank" className="flex flex-row items-center text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer">
    <BsGithub size={30} className="mr-1" /> GitHub
  </Link>
  <Link href={project.link} target="_blank" className="flex flex-row items-center text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer">
      <BsArrowUpRightSquare size={30} className="mr-1" /> Live App
    </Link>
              
          </div>

          <div className="text-center">
          <p className="mb-8 mt-8">
          A full stack app to help me and my friends play 8 ball pool and track the scores in a table format.<br /> <br />
                    
          Instead of using the notes app in my iPhone, I wanted to make a simple app<br />
          to keep scores of a pool tournament we were having so that anyone playing <br />
          in the tournament can go onto the live app, check the current match being <br />
          played, the current table standing and previous match history.<br /><br />
          
          Check below for the before image and after image.
          </p>
          </div>
       
          <ImageCarousel images={images} />
  
                </div> 
</main>
</>

    )
}