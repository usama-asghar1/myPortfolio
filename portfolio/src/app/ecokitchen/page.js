'use client'

import NavbarSubPage from '../../components/navbarSubPage'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const project = 
  {
    name: "Eco Kitchen",
    description:
      "A full-stack mobile app aimed to help users with their food consumption, reduce waste and cut costs.",
    image: "/ecokitchen.png",
    github: "https://github.com/usama-asghar1/EcoKitchen",
    link: "https://eco-kitchen.netlify.app/",
    page: "/ecokitchen",    
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
          A one-stop app that lets you add items to your virtual kitchen, discover new recipes, <br />
          track expiry dates or manage your shopping list. <br /> Created in an agile team of 6 called console.loggers() and planned, <br />  
          prepared and presented to industry professionals in 5 weeks.
          </p>
          </div>
       

        <div className="text-center">
      <h1 className="text-2xl font-bold mb-6 mt-8">Quick Demo</h1>
      <p className="mb-8">
        This is a short demo of the app that only shows a few features.
       <br />
        Check out the full app to see all the features in action!
      </p>
      <div className="max-w-lg mx-auto mt-4 mb-8">
        <video controls className="w-full">
          <source src="/EcoKitchenDemo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>  

    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6 mt-8">Full Presentation</h1>
      <p className="mb-8">
        This is a full presentation of the app by the team console.loggers().
      </p>
      <div className="max-w-lg mx-auto mt-4 mb-8">
        <video controls className="w-full">
          <source src="/finalPresentation.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
      
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
          <td className="border">React</td>
          <td className="w-2/5 border">A JavaScript framework for building user interfaces.</td>
        </tr>
        <tr>
          <td className="border">React Context API, React Hooks</td>
          <td className="w-2/5 border">
            The Context API allows sharing state across multiple components without prop drilling
            and allows useState and other React features in functional components.
          </td>
        </tr>
        <tr>
          <td className="border">React Router</td>
          <td className="w-2/5 border">A library for managing and handling routes in React applications.</td>
        </tr>
        <tr>
          <td className="border">Supabase</td>
          <td className="w-2/5 border">
            Provides user authentication, real-time databases, auto-generated APIs backed by
            Postgres, and serverless functions.
          </td>
        </tr>
        <tr>
          <td className="border">Supabase Real-time</td>
          <td className="w-2/5 border">
            Supabase provides built-in support for real-time subscriptions, allowing our
            application to respond instantly to changes in our database.
          </td>
        </tr>
        <tr>
          <td className="border">Chart.js, D3.js</td>
          <td className="w-2/5 border">Libraries for creating data visualizations in JavaScript.</td>
        </tr>
        <tr>
          <td className="border">Jest, Error Handling</td>
          <td className="w-2/5 border">Jest is a JavaScript testing framework which we will use with Supabase error handling.</td>
        </tr>
        <tr>
          <td className="border">Supabase, Netlify</td>
          <td className="w-2/5 border">
            These services provide hosting and continuous deployment for the application. Supabase
            includes simple deployment options, Netlify is particularly good for frontend deployment.
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