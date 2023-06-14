import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Time = styled.time``

const DateG =() => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date('2023-06-13')), 3000);
    },[])

    return(
        <Time>
            <DateG> <p>
                {' '}
                {dateState.toLocalDateString('en', {
                    timeZoneName: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                </p></DateG>
        </Time>
    )
}

export default Date