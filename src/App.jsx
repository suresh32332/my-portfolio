import Header from './component/header'
import './App.css'
import CenterSection from './component/CenterSection'
import About from './component/About'
import ProjectSection from './component/ProjectSection'
import Resume from './component/Resume'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (

    <div className="App">
         <Header/>
         <CenterSection/>
         <About/>
         <ProjectSection/>
         <Resume/>
         <Contact/>
         <Footer/>
    </div>

  )
}
export default App
