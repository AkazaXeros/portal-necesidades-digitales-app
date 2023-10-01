// Importing CSS.
import { container, icon } from './About.module.css';

// Importing images.
import nuria from '../../assets/nuria.jpg';
import pol from '../../assets/pol.jpg';
import william from '../../assets/william.jpg';

// Importing Material UI.
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useTitle from '../../hooks/useTitle';
import Card from '../UI/Card';

const About = () => {
  useTitle('About Us');

  return (
    <article className={container}>
      <Card>
        <figure>
          <img src={william} alt="Avatar William" />
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
              href="https://www.linkedin.com/in/williamgomezfernandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
          </div>
        </div>
      </Card>

      <Card>
        <figure>
          <img src={pol} alt="Avatar Sandra" />
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
      </Card>

      <Card>
        <figure>
          <img src={nuria} alt="Avatar Nuria" />
        </figure>

        <div>
          <p>
            Creative and up to date Full Stack Web Developer. Open to learn new
            technologies and be challenged.
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
              href="https://www.linkedin.com/in/nuriafs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default About;
