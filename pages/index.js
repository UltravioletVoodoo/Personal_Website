import MainLogo from "../components/mainLogo";
import Base from "../components/base";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import ScrollDown from "../components/scrollDown";
import Footer from "../components/footer";

const Index = () => (
  <div>
    <Base></Base>
    <Navbar></Navbar>
    <div>
      <MainLogo></MainLogo>
      <ScrollDown></ScrollDown>
      <Projects></Projects>
    </div>
    <Footer></Footer>
  </div>
);

export default Index;
