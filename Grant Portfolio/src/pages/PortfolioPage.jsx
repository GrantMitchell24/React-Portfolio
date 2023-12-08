import image1 from "./cravingswinebarimg.jpg"
import image2 from "./cravingswinebarimg.jpg"

function Portfolio() {
  return (
    <div>
      <h2>
        This is the Portfolio
      </h2>

      <a href="https://github.com/bpavlis/group-project-1   " ><img id="image2" src={image1} alt="NFL Salary Game"/></a>
      <a href="https://github.com/GrantMitchell24/weather-planner.git"> <img id="Weather Planner" src={image2} alt="Weather Planner" /></a>
      <a href=" https://github.com/GrantMitchell24/logo-maker"> <img id="Logo Maker" src="" alt="Logo Maker"/></a>
    </div>
  )
}
export default Portfolio