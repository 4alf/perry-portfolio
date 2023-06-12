import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme ="dark" />
                <ParticleComponent theme="dark" />

                <ArmStrong>
                    <img src ={hoverman} alt="nasaman" />
                </ArmStrong>

                <Main>
                    who you areeeeeee!!! <br></br> Perry Amos <br></br>
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage