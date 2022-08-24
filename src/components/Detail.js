import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <div>
    <Container>
        <Background>
        <img src='xyz.webp'/>
        </Background>
        <Imagetitle>
            <img src='viewers-pixar.png'/>
        </Imagetitle>
        <Controls>
        <PlayButton>
        <img src='play-icon-black.png'/>
        <span>Play</span>
        </PlayButton>
        <TrailerButton>
        <img src='play-icon-white.png'/>
        <span>Trailer</span>
        </TrailerButton>
        <AddButton>
        <img src='group-icon.png'/>
        </AddButton>

        <GroupButton>
        <img src='group-icon.png'/>

        </GroupButton>
        </Controls>
       <Subtitle>
       2 Hour 23 minutes - 2019 - English
       </Subtitle>
       <Description>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
       </Description>


    </Container>

    </div>
  )
}

export default Detail

const Container=styled.div`
min-height:Calc(100vh - 70px);
 padding:0px Calc(3.5vw + 5px);
 position: relative;

`
const Background=styled.div`
  position:fixed;
  left:0;
  right:0;
  bottom:0;  
  top:0;
  z-index:-1;
  opacity:0.8;

  img{
    heigth:100%;
    width:100%;
    object-fit:cover;
  }

`

const Imagetitle= styled.div`

height:30vh;
width:35vw;
min-height:170px;
min-width:120px;

img{
height:100%;
width:100%;
object-fit:cover;
}
`
const Controls=styled.div`
display:flex;
flex-wrap:flex-around;
`

const PlayButton=styled.div`
padding:0px 24px;
margin: 0px 20px;
background:white;
width:120px;
height:50px;
display:flex;
align-items:center;
border-radius:4px;
border:none;
text-transform:uppercase;

img{
  
}
span{
    color:black;
}

&:hover{
    background:transparent;
    border:2px solid white;
}

`
const TrailerButton=styled.div`
background:black;
border-radius:4px;
width:120px;
height:50px;
display:flex;
align-items:center;
text-transform:uppercase;
img{

}
span{
    color:whitesmoke;
}
&:hover{
    background:transparent;
    border:2px solid black;
}
`
const AddButton=styled.div`
background:black;
border-radius:50%;
width:60px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
padding:0px 24px;
margin: 0px 20px;
border:2px solid white;


&:hover{
    background:transparent;
    border:2px solid white;
}
 

`
const GroupButton=styled.div`
background:black;
border-radius:50%;
width:60px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
border:2px solid white;


&:hover{
    background:transparent;
    border:2px solid white;
}
 
`
const Subtitle=styled.div`
font-size:20px;
margin:20px 20px;
`
const Description=styled.div`
font-size:20px;
margin:20px 20px;
width:50%;

`

