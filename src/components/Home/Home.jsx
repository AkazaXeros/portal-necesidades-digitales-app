// Importing CSS
import {
  container,
  imagesCard,
  imagesUl,
  categoryImage,
  categoryTitle,
  listContainer,
  list,
  containerArticle,
  button,
} from './Home.module.css';

// Importing custom component.
import Card from '../UI/Card';

// Importing Material UI components.
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFilter } from '../../context/FilterContext';

//-----------------------------------------------//

const images = [
  {
    img: '../../../assets/translation.jpg',
    title: 'Document Translation',
  },
  {
    img: '../../../assets/doc-correction.jpg',
    title: 'Document correction',
  },
  {
    img: '../../../assets/code.jpg',
    title: 'Code Correction',
  },
  {
    img: '../../../assets/pic-editing.jpg',
    title: 'Image Editing',
  },
  {
    img: '../../../assets/video-editing.jpg',
    title: 'Video Editing',
  },
];

const Home = () => {
  const { setCategory } = useFilter();

  const navigate = useNavigate();

  //-----------Handler-------------//
  const clickHandler = (e, title) => {
    setCategory(title.toLocaleLowerCase().replaceAll(' ', '-'));
    navigate('/allEntries');
  };

  return (
    <>
      <div className={container}>
        <h1>Our most popular categories</h1>
        <ul className={imagesUl}>
          {images.map((image) => (
            <Card
              key={image.title}
              className={imagesCard}
              onClick={(e) => clickHandler(e, image.title)}
            >
              <img
                src={image.img}
                alt={`${image.title} Image`}
                className={categoryImage}
              />
              <h2 className={categoryTitle}>{image.title}</h2>
            </Card>
          ))}
        </ul>
      </div>

      <article className={listContainer}>
        <section className={list}>
          <img
            src="../../../assets/homePage.jpg"
            alt="Image of people working as a team"
          />

          <div>
            <h1>The way we help</h1>
            <ul>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Users can create detailed service requests, specifying the
                  type of modification needed, file formats, and any specific
                  requirements.
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Other users can view and comment on the service requests,
                  providing suggestions or offering their help to fulfill the
                  request.
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Wrench allows users to securely upload digital files required
                  for the modification and download the completed files once the
                  task is accomplished.
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Anonymous users can browse the list of all current services
                  and view public user information, fostering a sense of
                  community while respecting user privacy.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>

      <div className={containerArticle}>
        <article>
          <p>Suddenly everything is so doable</p>
          <Button color="primary" variant="contained" className={button}>
            <NavLink to="/users/register"> Join Wrench </NavLink>
          </Button>
        </article>
        <img
          src="../../../assets/team.jpg"
          alt="Image of people working as a team"
        />
      </div>
    </>
  );
};

export default Home;
