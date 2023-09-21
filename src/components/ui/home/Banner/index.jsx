import React from "react";
import bannerLogo1 from "../../../../assets/img/slider/01-slide-1.jpg";
import bannerLogo2 from "../../../../assets/img/slider/01-slide-2.jpg";
import bannerLogo3 from "../../../../assets/img/slider/01-slide-3.jpg";
import Slider from 'react-slick';

// Import CSS của slick-carousel (cần phải import theo cách này)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    cssEase: 'linear',

  };


export default function Banner(props) {
 
  const sliderStyle = {
 
    backgroundImage:`url(${bannerLogo2})`,
  
  };
  const containerStyle = {
    width: '1920px',
    
  };
  // const data=  props.data.dataFetchApi;
  console.log("props:", props.dataFetchApi )
  // console.log("props", props.dataApiFetch)
  return (
    <div>
      <div className="slider-area">
        <div className="swiper-container slider__active">
          <div className="slider-wrapper swiper-wrapper">
        
          <div   style={containerStyle}>
          <Slider {...settings}  >
         
         
          {
  props.dataFetchApi.map((slider, index) => {
    if (slider.image && slider.name === "banner") {
      return (
        <div key={index} >
          <div
     
            key={index}
            className="single-slider swiper-slide slider-height d-flex align-items-center"
            style={{ backgroundImage: `url(${slider.image})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="slider-content">
                    <div
                      className="slider-top-btn"
                      data-animation="fadeInLeft"
                      data-delay="1.5s"
                    >
                      <a href={slider.buttonLink} className="st-btn b-radius">
                        HOT DEALS
                      </a>
                    </div>
                    <h2
                      data-animation="fadeInLeft"
                      data-delay="1.7s"
                      className="pt-15 slider-title pb-5"
                    >
                      {slider.title}
                    </h2>
                    <p
                      className="pr-20 slider_text"
                      data-animation="fadeInLeft"
                      data-delay="1.9s"
                    >
                      {slider.text}
                    </p>
                    <div className="slider-bottom-btn mt-75">
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.15s"
                        href="shop"
                        className="st-btn-b b-radius"
                      >
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })
}

          
    
              </Slider>
            <div className="main-slider-paginations"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
