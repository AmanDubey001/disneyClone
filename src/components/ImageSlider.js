import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Carousel {...settings}>
        <Wrap>
        <img src='slider-badag.jpg'/>
        </Wrap>
        <Wrap>
        <img src='slider-badging.jpg'/>
        </Wrap>
        <Wrap>
        <img src='slider-scale.jpg'/>
        </Wrap>
        <Wrap>
        <img src='slider-scales.jpg'/>
        </Wrap>
     
    </Carousel>
  )
}

export default ImageSlider

const Carousel=styled(Slider)`
margin-top:5px;

ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}

li.slick-active button::before{
    color:white;
}
button{
    z-index:1;
}

.slick-list {
    overflow:visible;
}
`
const Wrap = styled.div`

cursor:pointer;

img {

    border:8px solid transparent;
    width:100%;
    height:100%;
    border-radius:4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:300ms;
    &:hover {
        border:4px solid whitesmoke;
    }
}

`