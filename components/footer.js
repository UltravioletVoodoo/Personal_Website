import { NavbarLink } from "./navbarLink";
import { SocialMediaIcon } from "./socialMediaIcon";
import style from "./styles/footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.socialMediaContainer}>
        <SocialMediaIcon
          alt={"Github"}
          href={"https://github.com/UltravioletVoodoo"}
          imgPath={"/static/img/github-logo.svg"}
        />
        <SocialMediaIcon
          alt={"LinkedIn"}
          href={"https://www.linkedin.com/in/jonathan-bezeau-b04537194"}
          imgPath={"/static/img/linkedin-logo.svg"}
        />
        <SocialMediaIcon
          alt={"Facebook"}
          href={"https://www.facebook.com/jonathan.bezeau.7"}
          imgPath={"/static/img/facebook-logo.svg"}
        />
      </div>
      <NavbarLink
        text="Resume"
        href="/static/publicFiles/resume.pdf"
        newTab={true}
      />
    </div>
  );
}
