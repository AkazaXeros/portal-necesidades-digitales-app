import "./Categories.module.css";

const Categories = () => {

    return(
        <>
        <div>
            <h1>Categories</h1>  
        </div>
          
        <div>
            <section className="section">
                <h2>Video Editing</h2>
                <img src="../src/img/video-editing.jpg" alt="video" />
            </section>
            <section className="section">
                <h2>Image Editing</h2>
                <img src="../src/img/pic-editing.jpg" alt="image" />
            </section>
            <section className="section">
                <h2>Document Translation</h2>
                <img src="../src/img/translation.jpg" alt="translation" />
            </section>
            <section className="section">
                <h2>Document Correction</h2>
                <img src="../src/img/doc-correction.jpg" alt="correction" />
            </section>
            <section className="section">
                <h2>Code Correction</h2>
                <img src="../src/img/code.jpg" alt="code" />
            </section>
        </div>
        </>
    
        );
};

export default Categories;
