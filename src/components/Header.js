import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    
      <Nav>
        <Logo src="logo.svg"/>
        <Navmenu>
            <a>
                <img src="home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="search-icon.svg"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="original-icon.svg"/>
                <span>ORIGNALS</span>
            </a>
            <a>
                <img src="watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="series-icon.svg"/>
                <span>SERIES</span>
            </a>
            <a>
                <img src="movie-icon.svg"/>
                <span>MOVIES</span>
            </a>

        </Navmenu>
        
        
      </Nav>

    
  )
}

export default Header

const Nav=styled.div`
  height:70px;
  background:black ; 
  display:flex;
  align-items:center;
  padding:0 30px;
`
const Logo=styled.img`
height:50px;
width:100px
padding-bottom:50px
`
const Navmenu=styled.div`

 display:flex;
 flex:1;
 margin-left:100px;
 cursor:pointer;

 a{
 display:flex;
 align-items:center;
 padding:0 20px;
 }
 img{
    height:50px;
    width:50px;
    padding-right:10px;
 }
 span{
    font-size:15px
    position:relative;
 }

`
