'use client'

import Navbar from '../../components/navbarNext'


export default function Ecokitchen() {
    return (
        <>
        
        <Navbar/>
        <main className="animate-fadeIn animation-delay-2">
        
        <div className="my-12 pb-12 pt-20 md:pt-16 md:pb-30">
        <h1 className="text-center font-bold text-4xl">
         Eco Kitchen
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
       </div> 

      
      <h1 className="text-center font-bold text-3xl">Tech Stack</h1>
        
  
       <div className="flex flex-row justify-center">
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
  
    
</main>
</>

    )
}