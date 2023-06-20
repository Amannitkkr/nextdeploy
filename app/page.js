import './global.css'
import Navbar from "./components/navbar";
import Product from './components/product';
import Logocloud from './components/logocloud';
import Banner from './components/banner';
import Features from './components/features';
import Footer from './components/footer';

const Mainpage=()=>{
    return(
        <div>
        <Navbar/>
        <Banner/>
        <Logocloud/>
        <Product/>
        <Features/>
        <Footer/>

        </div>
    )
}
export default Mainpage;