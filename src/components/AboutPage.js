import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import HomeButton from '../subComponents/HomeButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
//import ParticleComponent from '../subComponents/ParticleComponent';
import BigTits from '../subComponents/BigTits'
import hoverman from '../assets/Images/PerryAmos.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width:100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const ArmStrong = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`
const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme ="dark" />
                <HomeButton />

                <ArmStrong>
                    <img src ={hoverman} alt="Perry Amos" />
                </ArmStrong>

                <Main>
                    Ia m a UI/UX designer who is very passionate about creating visually appealing design that are both beautiful and functional. 
                    My work is centered around the user's needs and preferences, and i take pride in designing interfaces that enhance their interaction with digital 
                    product seamless. i am constantly exploring and learning about the latest trends, techniques and technology in the field of UI/UX design to stay ahead
                    of the curve. I belive that design is an iterative process, and i am always looking for ways to improve my craft and create better design.
                </Main>

                <BigTits text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage