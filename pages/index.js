import MainLogo from "../components/mainLogo";
import Base from "../components/base";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ScrollingContent } from "../components/scrollingContent";

export default function Index() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <ScrollingContent>
        <MainLogo></MainLogo>
      </ScrollingContent>
      <Footer></Footer>
    </div>
  );
}
