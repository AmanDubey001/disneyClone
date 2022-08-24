import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
      <Container>
        <Cta>
         <CtaLogoOne>
            <img src="logo.svg"/>
         </CtaLogoOne>
         <LoginButton>
         Get All There
         </LoginButton>
         <Description>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the five centuries, but also the leap into electronic typesetting,

         </Description>
        </Cta>
      </Container>
  )
}

export default Login

const Container=styled.div`
min-height:Calc(100vh - 70px);
padding:0px Calc(3.5vw + 5px);
position:relative;

&:before {
background:url("login-background.jpg") center center / 
cover no-repeat fixed;
content:"";
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
}
`
const Cta=styled.div`
  img{
    height:100px;
    width:200px;
    margin-top:150px;
    margin-left:400px;
  }
`
const CtaLogoOne=styled.div`
`
const LoginButton=styled.div`
width:400px;
padding:5px;
color:white;
background:blue;
text-align:center;
margin-left:300px;
height:30px;
display:flex;
justify-content:center;
margin-top:20px;
border-radius:10px;
font-weight:bold;
cursor:pointer;
letter-spacing:1.5px;
margin-bottom:12px;
&:hover{
    background:whitesmoke;
    color:black;
}
`
const Description=styled.div`
 width:400px;
 color:whitesmoke;
 letter-spacing:1.5px;
 margin-left:300px;


`
