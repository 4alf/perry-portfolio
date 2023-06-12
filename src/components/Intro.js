import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Me from '../assets/Images/perz-port.png';






const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;

    z-index:1;

`
// Box style for weidth for 55vh but now 70%. fixing bug 
//{  border-left: 2px solid ${props => props.theme.body};
//{border-right: 2px solid ${props => props.theme.text};}
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;


@media (max-width: 900px) {
    .pic{
        
        top: 30%;
    }
}

.pic{
    position: absolute;
    
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme};
padding: 2rem;
cursor: pointer;
span {
    font-size: 3rem;
    color: blue;
}
@media (max-width: 425px) {
    font-size: 1em;
    padding: 0rem;
    
}
display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
    
}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '20vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi 👋🏻</h1>
                    <h3>I'm <span>perry</span></h3>
                    <h6>I'm a ui/ux designer with a knack for desing and attention for details.</h6>
                </Text>
            </SubBox>
            
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
