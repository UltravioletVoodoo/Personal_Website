import style from "../styles/aboutSection.module.css";
import { ContentSection } from "./contentSection";

export default function AboutSection(props) {
  const { title, textSections, photos } = props;

  return (
    <ContentSection title={title} textSections={textSections}>
      <div className={style.imagesContainer}>
        {photos.map((photo, index) => (
          <img
            key={`${title}-photo-${index}`}
            className={style.image}
            src={photo}
          />
        ))}
      </div>
    </ContentSection>
  );
}
