import MainContent from "@/components/MainContent"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Navbar from '../components/navbar'
 
export default function Home() {
  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    
    <MainContent />
    <About />
    <Projects />
    </main>   
    </>
  )
}
