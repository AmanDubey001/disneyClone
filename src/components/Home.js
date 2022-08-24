import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewer from './Viewer';


function Home() {
   

  return (
    <>
        <Container>
          <ImageSlider/>
          <Viewer/>
          <Movies/>
        </Container>
      
    </>
  )
}

export default Home
 
const Container=styled.main`
 min-height:Calc(100vh - 70px);
 padding:0px Calc(3.5vw + 5px);
 position:relative;


&:before {
background:url("home-background.png") center center / 
cover no-repeat fixed;
content:"";
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
}

`;
