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
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
           <div className="flex flex-row justify-center space-x-4">

             <Link href={project.github} target="_blank" className="text-teal-600">
                <BsGithub  size={30}  className="hover:-translate-y-1 transition-transform cursor-pointer"   />
             </Link>
             <Link href={project.link} target="_blank" className="text-teal-600">
                <BsArrowUpRightSquare   size={30}   className="hover:-translate-y-1 transition-transform cursor-pointer"  />
             </Link> 
              
          </div>
        </h1>
       
       
        <ImageCarousel images={images} />
      
         
      
                </div> 
</main>
</>

    )
}