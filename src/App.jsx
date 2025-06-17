import './App.css'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { PrincipalSection } from './components/PrincipalSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'


function App() {

  return (
    <>
    <div id='body' className='bg-black bg-repeat bg-cover bg-bottom w-full h-screen bg-fixed'>
      <NavBar />
      <PrincipalSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
      
    </div>
    </>
  )
}

export default App
