import './App.css'


function App() {

  return (
    <>
      <div className="Navbar">
        <div className="SocialMedia">
          <div className="App2">
            <a href="https://www.linkedin.com/in/ritthick-thiaga/"><img src='../src/assets/linkedin.png' width={50} height={50} /></a>
          </div>
          <div className="App2">
            <a href="https://www.instagram.com/ritthickthiaga/"><img src='../src/assets/instagram.png' width={50} height={50} /></a>
          </div>
          <div className="App2">
            <a href="https://github.com/ritthickkt"><img src='../src/assets/github.png' width={50} height={50} /></a>
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
          <img src='../src/assets/react.png' width={100} height={100} />  
        </div>
        <div className="App">
          <img src='../src/assets/vite.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/javascript.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/css.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/html.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/c.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/github.png' width={100} height={100}/>
        </div>
      </div>
      <div className="Apps">
        <div className="App">
          <img src='../src/assets/python.png' width={100} height={100} />  
        </div>
        <div className="App">
          <img src='../src/assets/typescript.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/nextjs.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/expo.png' width={100} height={100}/>
        </div>
        <div className="App">
          <img src='../src/assets/tailwindcss.png' width={100} height={100}/>
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