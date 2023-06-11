import React from 'react'
import styled from 'styled-components'
//import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: #000;

font-family: system-ui;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`
// {${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};}
const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          PERZ.
        </Logo>
    )
}

export default LogoComponent
