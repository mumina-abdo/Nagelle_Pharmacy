
import Team from "./components/Team";
import Aboutpage from "./components/About";
import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer/Index';
import Showcase from "./components/Showcase";
import Mission from "./components/Mission";
import WellnessBanner from "./components/WellnessBanner";
import TestimonialSection from "./components/TestimonialSection";

export default function Home(){
  return(
    <div className="min-h-screen">
     <Navbar/>
     <LandingPage/>
     <WellnessBanner/>
     <Services/>
     <Aboutpage/>
     <Products/>
     <Showcase/>
     <TestimonialSection/>
     <Mission/>
     <Team/>
     <Footer/>

    </div>
  )}