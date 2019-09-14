import MainLogo from "../components/mainLogo";
import Base from "../components/base";
import Projects from "../components/projects";
import Navbar from "../components/navbar";

const Index = () => (
    <div>
        <Base></Base>
        <div className="col-10 col-mx-auto">
            <div className="columns">
                <div className="col-12">
                    <Navbar></Navbar>
                </div>
                <div className="col-md-12 col-lg-10 col-8 col-mx-auto">
                    <MainLogo></MainLogo>
                </div>
                <div>
                    <Projects></Projects>
                </div>
            </div>
        </div>
    </div>
);

export default Index;