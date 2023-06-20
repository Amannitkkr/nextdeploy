import '../global.css'
import Navbar from "../components/navbar";
import Mission from "../components/mission";
import Team from "../components/team";
import Footer from '../components/footer';
import Investors from '../components/investors';
import Progress from '../components/progress';
const About=()=>{
    return(
        <div>
            
            <Navbar/>
            <Mission/>
            <Investors/>
            <Progress/>
            <Team/>
           
            <Footer/>

        </div>
    )
}
export default About;