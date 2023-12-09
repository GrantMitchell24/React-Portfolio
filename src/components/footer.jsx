import ReactDOM from 'react-dom'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <footer id="footer">
    <h2>Contact Me</h2>
    <ul>
      <li> PHONE: 763-807-5677</li>
      <li>
        <a href="mailto:grantmitchell2423@yahoo.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li> 
        <a href="https://github.com/grantmitchell24">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </footer>
  )
}
export default Footer

