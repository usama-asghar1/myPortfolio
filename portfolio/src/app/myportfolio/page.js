'use client'

import NavbarSubPage from '../../components/navbarSubPage'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const project = 
{
    name: "My Portfolio",
    description: "My portfolio website created with Next v13 and Tailwind CSS.",
    image: "/portfolio.png",
    github: "https://github.com/usama-asghar1/myPortfolio",
    link: "https://usama-asghar.netlify.app/",
    
  }


export default function Ecokitchen() {
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
       
         
      <h1 className="text-center font-bold text-2xl mt-6 mb-8">Tech Stack</h1>
        
      <p>
       <div className="flex flex-row justify-center text-center">
        <div className="md:w-1/2 p-4 md:p-0 flex flex-col items-center justify-center text-[2vmax] md:text-[1vmax]">
        <table className="w-full table-fixed border">
      <thead>
        <tr>
          <th className="w-2/5 border">Tool</th>
          <th className="w-3/5 border">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border">Next.js</td>
          <td className="w-2/5 border">I used Next.js to reduce latency and increase performance. After learning React, this 
          felt like a natural progression, dynamic routing and server-side rendering are some of the features that I used.  </td>
        </tr>
        <tr>
          <td className="border">Tailwind CSS</td>
          <td className="w-2/5 border">
          Using TailwindCSS allows me to be flexible on my design and have specific placement of components.
          I also used it to create a responsive design that works on all screen sizes and also animate components.
          </td>
        </tr>
      </tbody>
    </table>
   
                </div>
                </div>
                </p>
  
                </div> 
</main>
</>

    )
}