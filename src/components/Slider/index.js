import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1

    }
    return (
        <Slider {...settings} id="team">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../Images/team1.jpg").default} />
                    </div>
                    <div className="details">
                        <h2>Lawrance Lovedeep <span className="job-title">Co-Founder</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../Images/team2.jpg").default} />
                    </div>
                    
                    <div className="details">
                        <h2>Sakshi Shah<span className="job-title">Co-Founder</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../Images/team3.jpg").default}/>
                    </div>
                
                    <div className="details">
                        <h2>Vishwajit <span className="job-title">Content Advisor</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../Images/team4.png").default} />
                    </div>
                
                    <div className="details">
                        <h2>Muskan Kathuria <span className="job-title">PR Associate</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../Images/team5.jpeg").default} />
                    </div>
                    
                    <div className="details">
                        <h2>Aishwarya Mishra <span className="job-title">PR Associate</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src= {require("../../Images/team6.jpg").default} />
                    </div>
                    
                    <div className="details">
                        <h2>Arun <span className="job-title">Digital Marketing</span></h2>
                    </div>
                </div>
            </div>
            
        </Slider>
    )
}

export default ImageSlider