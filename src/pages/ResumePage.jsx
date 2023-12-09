import resume from "./GrantMResume.pdf"
import "./ResumePage.css"

function Resume() {
  return (
    <div>
      <h3>
        Download My Resume <a href={resume} download>here</a>
      </h3>


      <ul id = "techStack">

        <li>JavaScript</li>
        <li>ES6+</li>
        <li>CSS3</li>
        <li>HTML</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>GitHub</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Express</li>
        <li>React</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>jQuery</li>
        <li>BootStrap</li>
      </ul>


    </div>
  )
}
export default Resume