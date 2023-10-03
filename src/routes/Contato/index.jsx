import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Contato(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <div className="container">
                <h1>Pagina de contato</h1>
            </div>
            <Footer/>
        </div>
    )
}