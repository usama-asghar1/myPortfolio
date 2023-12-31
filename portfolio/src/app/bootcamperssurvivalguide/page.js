'use client'

import NavbarSubPage from '../../components/navbarSubPage'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import ImageCarousel from '../../components/ImageCarousel'

const project = 
{
    name: "Bootcampers Survival Guide",
    description: "A frontend app designed to help SoC bootcampers find Q&A for topics from a specific week of the course.",
    image: "/bootcamperssurvivalguide.png",
    github: "https://github.com/usama-asghar1/BootcampersSurvivalGuide",
    link: "https://bootcampers-survival-guide.netlify.app",
    
  }

  const images = [
    { url: "bootcampers-problem.png", alt: "Problem Statement" },
    { url: "bootcampers-lofi.png", alt: "Lo-Fi Wireframe" },
    { url: "bootcampers-hifi.png", alt: "Hi-Fi Wireframe" },
    { url: "bootcampers-idea.png", alt: "Ideation" },
    { url: "bootcampers-componenttree.png", alt: "Component Tree" },
    { url: "bootcampers-accessible.png", alt: "Accessibility" },
    { url: "bootcampers-trello.png", alt: "Trello" },
  ];
  
export default function BootcampersSurvivalGuide() {
    return (
        <>
        
        <NavbarSubPage/>
        <main className="animate-fadeIn animation-delay-2">
        
        <div className="my-12 pb-12 pt-20 md:pt-16 md:pb-30">

        <h1 className="text-center font-bold text-4xl"> 
        {project.name}
        </h1>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
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
          A front-end React app that is designed to help bootcampers at the School of Code in their learning journey <br />
          by creating specific forums with Q&As for each week of the course. <br />
          The app allows users to post questions and answers and allows users to refer back to any topic at any point.
          </p>
          </div>
       
       
        <ImageCarousel images={images} />
      
         
      
                </div> 
</main>
</>

    )
}