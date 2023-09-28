// Importing CSS
import {
  container,
  imagesCard,
  imagesUl,
  categoryImage,
  categoryTitle,
} from "./Categories.module.css";

// Importing Card component.
import Card from "../UI/Card";

// Array images.
const images = [
  {
    img: "../../../assets/translation.jpg",
    title: "Document Translation",
  },
  {
    img: "../../../assets/doc-correction.jpg",
    title: "Document correction",
  },
  {
    img: "../../../assets/code.jpg",
    title: "Code Correction",
  },
  {
    img: "../../../assets/pic-editing.jpg",
    title: "Image Editing",
  },
  {
    img: "../../../assets/video-editing.jpg",
    title: "Video Editing",
  },
];

const Categories = () => {
  return (
    <div className={container}>
      <h1>Our most popular categories</h1>
      <ul className={imagesUl}>
        {images.map((image) => (
          <Card key={image.title} className={imagesCard}>
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
  );
};

export default Categories;
