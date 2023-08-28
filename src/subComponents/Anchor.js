import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../components/AllSvgs'


const AnchorComponent = (props) => {

    const reff= useRef(null);
    const hiddenRef =useRef(null)

    return (
        <Container>
        <PreDisplay ref={hiddenRef} className='hidden'>
    
        <Anchor width={70} height={70} fill='currentColor'/>
    </PreDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.number)].map((x,id) => {
                        return <Link key={id} width={25} height={25} fill='currentColor' className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill='currentColor'/>
            </Slider>
        </Container>
    )

}

export default AnchorComponent