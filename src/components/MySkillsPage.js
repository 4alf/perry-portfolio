import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'



const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Designer
</Title>
<Description>
I love to create design which speaks, Keep it clean, minimal and simple.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Web Design
    </li>
    <li>
        Mobile Apps
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
