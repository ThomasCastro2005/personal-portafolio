import './App.css'
import { AboutMe } from './components/AboutMe'
import { NavBar } from './components/NavBar'
import { SectionMain } from './components/PrincipalSection'
import { SkillsSection } from './components/SkillsSection'


function App() {

  return (
    <>
    <div id='body' className='bg-black bg-repeat bg-cover bg-bottom w-full h-screen bg-fixed'>
      <NavBar />
      <SectionMain />
      <AboutMe />
      <SkillsSection />
      
    </div>
    </>
  )
}

export default App
