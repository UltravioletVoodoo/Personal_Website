import Base from "../components/base";
import Navbar from "../components/navbar";
import AboutContent from "../components/aboutContent";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <div>
        <AboutContent></AboutContent>
      </div>
      <Footer></Footer>
    </div>
  );
}
