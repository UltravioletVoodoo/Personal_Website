import Base from "../components/base";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GameJams from "../components/gameJams";

export default function Jams() {
    return (
        <div>
            <Base></Base>
            <Navbar></Navbar>
            <div className="col-10 col-mx-auto">
                <GameJams />
            </div>
            <Footer></Footer>
        </div>
    );
}