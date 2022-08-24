import React from 'react'
import styled from 'styled-components'

function Viewer() {
  return (
    <div>
      <Container>
        <Wrap>
           <img src='viewers-disney.png'/> 
        </Wrap>
        <Wrap>
           <img src='viewers-marvel.png'/> 
        </Wrap>
        <Wrap>
           <img src='viewers-national.png'/> 
        </Wrap>
        <Wrap>
           <img src='viewers-starwars.png'/> 
        </Wrap>
        <Wrap>
           <img src='viewers-pixar.png'/> 
        </Wrap>
      </Container>
    </div>
  )
}

export default Viewer

const Container=styled.div`
margin-top:20px;
display:flex;
margin-top:30px;
grid-gap:10px;
padding:20px 0px 30px;

grid-template-colums:repeat(5,minmax(1fr));
`
const Wrap=styled.div`
border: 2px solid rgba(249,249,249,0.1);
border-radius:10px;
cursor:pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 300ms cubic-bezier(0.25, 0.45, 0.49, 0.49) 0s;
img{
    height:100%;
    width:100%;
    object-fit:cover;

}
&:hover{
  border-color:whitesmoke;
  transform:scale(1.05);

}


`