import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Art1 from './images/art1.png'
import Art2 from './images/art2.jpg'
import Art3 from './images/art3.jpg'
import Art4 from './images/art4.jpg'
import Art5 from './images/art5.jpg'
import Art6 from './images/art6.jpg'
import Art7 from './images/art7.jpg'
import Art8 from './images/art8.jpg'
import Art9 from './images/art9.jpg'
import Art10 from './images/art10.jpg'
import Art11 from './images/art11.jpg'

import './Graphics.css'


function GraphicsSection() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    
    


    return (
        <div className="container" id="graphics">
             <Slider {...settings} >
                <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art1} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art2}  alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art3} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art4} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> 
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art5} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>  
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art6} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>  
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art7} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>  
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art8} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> 
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art9} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> 
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art10} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
                
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Art11} alt="art..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#Link"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#Link"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>          
             </Slider>
        </div>
          
    )
}

export default GraphicsSection
