import fballscreenshot from "./fballgamescreenshot.png"
import weatherplannershot from "./weatherdashboard.png"
import notetakerscreenshot from "./notetakerscreenshot.png"


import './PortfolioPage.css'

function Portfolio() {
  return (
    <div>
<h2 id="work">Work</h2>
    <section class="projects" id="projects">

      <div class="card" id="priority">
        <a href="https://bpavlis.github.io/group-project-1/" target="blank">
          <img src={ fballscreenshot } alt= "NFL Salary Higher Lower " />
        </a>
        <div class="card-text">
          <h3>NFL Salary Game</h3>
        </div>
      </div>
      </section>

      <div class="card">
        <a href="https://grantmitchell24.github.io/weather-planner/" target="blank">
          <img src={ weatherplannershot } alt="Weather Planner" />
        </a>
        <div class="card-text">
        <h3>Weather Planner</h3>
        </div>
      </div>

      <div class="card">
        <a href=" https://grant-note-taker-ead146979d7f.herokuapp.com/" target="blank">
          <img src={ notetakerscreenshot } alt="Note-Taker" />
        </a>
        <div class="card-text">
          <h3>Note Taker App</h3>
        </div>
      </div>
      </div>
  )
}
export default Portfolio