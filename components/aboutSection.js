import style from "../styles/aboutSection.module.css";

export default function AboutSection(props) {
  const { title, text, photos } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={style.imagesContainer}>
        {photos.map((photo) => (
          <img className={style.image} src={photo} />
        ))}
      </div>
    </div>
  );
}
