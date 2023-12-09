import "./ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className = "contactPage" >
      <ul className = "contactList">
        <li> PHONE: 763-807-5677</li>
        <li>
          <h3>Email</h3>
          <a href="mailto:grantmitchell2423@yahoo.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <h3>GitHub</h3>
          <a href="https://github.com/grantmitchell24">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>


    </div>

  )
}
export default Contact