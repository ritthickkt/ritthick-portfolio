import './App.css'
import linkedIn from '../src/assets/linkedin.png'
import instagram from '../src/assets/instagram.png'
import github from '../src/assets/github.png'
import react from '../src/assets/react.png'
import vite from '../src/assets/vite.png'
import javascript from '../src/assets/javascript.png'
import css from '../src/assets/css.png'
import html from '../src/assets/html.png'
import c from '../src/assets/c.png'
import python from '../src/assets/python.png'
import typescript from '../src/assets/typescript.png'
import nextjs from '../src/assets/nextjs.png'
import expo from '../src/assets/expo.png'
import tailwindcss from '../src/assets/tailwindcss.png'


function App() {

  return (
    <>
      <div className="Navbar">
        <div className="SocialMedia">
          <div className="App2">
            <a href="https://www.linkedin.com/in/ritthick-thiaga/"><img src={linkedIn} width={50} height={50} /></a>
          </div>
          <div className="App2">
            <a href="https://www.instagram.com/ritthickthiaga/"><img src={instagram} width={50} height={50} /></a>
          </div>
          <div className="App2">
            <a href="https://github.com/ritthickkt"><img src={github} width={50} height={50} /></a>
          </div>
        </div>
      </div>
      <div className="Intro">
        <div className="Hi">
          Hello world,
        </div>
        <div className="Name">
          I'm{'\u00A0'}
          <div className="FirstName">
            Ritthick{'\u00A0'}
          </div>
          <div className="LastName">
            Thiaga.
          </div>
        </div>
        <div className="AboutMe">
          I am a penultimate <strong>computer science</strong> student, specialising in <b>security engineering</b>
          . Scroll down to find more about me and what I do. 
        </div>
      </div>
      <div className="Title"> 
        Based in Sydney.
      </div>
      <div className="Secondtitle">
        What I know            
      </div>
      <div className="Apps">
        <div className="App">
          <img src={react} width={100} height={100} />  
        </div>
        <div className="App">
          <img src={vite} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={javascript} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={css} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={html} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={c} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={github} width={100} height={100}/>
        </div>
      </div>
      <div className="Apps">
        <div className="App">
          <img src={python} width={100} height={100} />  
        </div>
        <div className="App">
          <img src={typescript} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={nextjs} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={expo} width={100} height={100}/>
        </div>
        <div className="App">
          <img src={tailwindcss} width={100} height={100}/>
        </div>
      </div>
      <div className="Thirdtitle">
        Experience           
      </div>
      <div className="Experience">
        <div className="ExperienceTitle">
          <div>Penetration Testing @ Pearler</div>
        </div>
        <div className="ExperienceDate">
          <div>September 2024 - December 2024</div>
        </div>
        <div className="ExperienceDescription">
          <ul>
            <li>Conducted security assessment on Pearlers main web application, identifying critical vulnerabilities that
posed risks to user data.</li>
            <li>Compiled a detailed security report outlining findings, risk assessments, and remediation
recommendations, improving company-wide security awareness.</li>
          </ul>
        </div>
      </div>
      <div className="Experience">
        <div className="ExperienceTitle">
          <div>Data Analyst Extern @ Webacy</div>
        </div>
        <div className="ExperienceDate">
          <div>August 2024 - September 2024</div>
        </div>
        <div className="ExperienceDescription">
          <ul>
            <li>Analysed and labelled smart contract vulnerabilities, enhancing accuracy in risk categorization and
security assessment.</li>
            <li> Conducted correlation analysis of risk tags to identify the most prevalent vulnerabilities, improving fraud
detection by 25%.</li>
            <li> Applied unsupervised machine learning for cluster analysis, identifying common security risks and
profiling high-risk contracts.</li>
          </ul>
        </div>
      </div>
      <div className='FourthTitle'>
        Projects
      </div>
    </>
  )
}
export default App