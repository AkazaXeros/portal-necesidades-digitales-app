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
} from './Categories.module.css';

// Importing Card component.
import Card from '../UI/Card';

// Importing Material UI components.
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFilter } from '../../context/FilterContext';

//-----------------------------------------------//
// Array images.
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

const Categories = () => {
  const { setCategory } = useFilter();

  const navigate = useNavigate();

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
            <h1>Title</h1>
            <ul>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tenetur officiis aliquam ipsam voluptatem
                  doloribus magni. Unde ex expedita aspernatur dolor, earum
                  error iusto dignissimos iure fugiat quia maiores odio!
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tenetur officiis aliquam ipsam voluptatem
                  doloribus magni. Unde ex expedita aspernatur dolor, earum
                  error iusto dignissimos iure fugiat quia maiores odio!
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tenetur officiis aliquam ipsam voluptatem
                  doloribus magni. Unde ex expedita aspernatur dolor, earum
                  error iusto dignissimos iure fugiat quia maiores odio!
                </p>
              </li>
              <li>
                <VerifiedOutlinedIcon color="primary" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tenetur officiis aliquam ipsam voluptatem
                  doloribus magni. Unde ex expedita aspernatur dolor, earum
                  error iusto dignissimos iure fugiat quia maiores odio!
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
          src="../../../assets/homePage.jpg"
          alt="Image of people working as a team"
        />
      </div>
    </>
  );
};

export default Categories;
