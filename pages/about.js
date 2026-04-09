import Base from "../components/base";
import Navbar from "../components/navbar";
import AboutContent from "../components/aboutContent";
import Footer from "../components/footer";
import { ScrollingContent } from "../components/scrollingContent";

export default function About() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <ScrollingContent>
        <AboutContent></AboutContent>
      </ScrollingContent>
      <Footer></Footer>
    </div>
  );
}
