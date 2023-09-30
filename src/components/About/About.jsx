// Importing CSS
import { container, icon } from './About.module.css';

// Importing Materia UI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            <a
              href="https://github.com/AkazaXeros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" color="primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/william-g%C3%B3mez-fern%C3%A1ndez-517442255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
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
            <a
              href="https://github.com/Snnip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" color="primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandra-polb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <figure>
          <img src="../../../assets/william.jpg" alt="Image William" />
        </figure>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            isteasvdgshdgcfgfsdhgsdfg Lorem ipsum do
          </p>
          <div className={icon}>
            <a
              href="https://github.com/nuriafs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" color="primary" />
            </a>
            <a
              href="https://github.com/Snnip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
