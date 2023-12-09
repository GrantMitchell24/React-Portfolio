import {Link} from "react-router-dom"
import "./Header.css"
import headshot from "./src/components/GrantHeadshot.jpeg"
function Header(){
  return(
    

  <div className="div-flex">
    <div className="header-info">
<img id="image" src={headshot} alt="Grant Picture" />
<h4 className="main-name">
  Grant Mitchell
</h4>
<h4 className="main-name">
  Junior Developer 
</h4>
   </div>

<ul>
  
  <Link to="/"><li>About</li></Link>
  <Link to="/portfolio"><li>Portfolio</li></Link>
  <Link to="/contact"><li>Contact</li></Link>
  <Link to="/resume"><li>Resume</li></Link>

</ul>

    </div>
  )
}
export default Header