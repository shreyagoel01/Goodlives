import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection'
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Services1 from '../components/Services1';
import Services2 from '../components/Services2';
import "../css/App.css"
import ImageSlider from "../components/Slider";
import Footer from '../components/InfoSection/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle =()=>{
        setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <MainSection />
        <InfoSection {...homeObjOne}/>
        <Services1 />
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Services2 />
        <InfoSection {...homeObjFour}/>
      <h1 className="slider_title"> Our Team</h1>
      <ImageSlider /> 
      <br />
      <br />
      <Footer />
    
        </>
    );
};

export default Home
