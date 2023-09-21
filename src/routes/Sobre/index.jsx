import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Sobre(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <div className="container">
                <h1>Sobre</h1>
            </div>
            <Footer/>
        </div>
    )
}