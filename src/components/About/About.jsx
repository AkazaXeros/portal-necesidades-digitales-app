// Importing CSS
import { container, icon } from "./About.module.css";

// Importing Materia UI
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <article className={container}>
      <section>
        <figure>
          <img src="../../../assets/william.jpg" alt="Image William" />
        </figure>

        <div>
          <p>
            Passionate and driven web developer with a solid foundation in
            front-end and back-end technologies.
          </p>
          <div className={icon}>
            <GitHubIcon fontSize="large" color="primary" />
            <LinkedInIcon fontSize="large" color="primary" />
          </div>
        </div>
      </section>

      <section>
        <figure>
          <img src="../../../assets/sandra.jpg" alt="Image Sandra" />
        </figure>

        <div>
          <p>
            Junior web developer who loves what she does and dedicates one
            hundred percent to grow every day.
          </p>
          <div className={icon}>
            <GitHubIcon fontSize="large" color="primary" />
            <LinkedInIcon fontSize="large" color="primary" />
          </div>
        </div>
      </section>

      <section>
        <figure>
          <img src="../../../assets/william.jpg" alt="Image William" />
        </figure>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iste
            beatae praesentium fuga animi optio, magni sunt ea deserunt nesciunt
          </p>
          <div className={icon}>
            <GitHubIcon fontSize="large" color="primary" />
            <LinkedInIcon fontSize="large" color="primary" />
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
