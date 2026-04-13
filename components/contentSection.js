import style from "../styles/contentSection.module.css";

export function ContentSection(props) {
  const { title, textSections, children } = props;

  return (
    <div className={style.contentSection}>
      <h3 className={style.title}>{title}</h3>
      <div>
        {textSections.map((textSection, index) => (
          <p key={`textSection-${index}`} className={style.text}>
            {textSection}
          </p>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
