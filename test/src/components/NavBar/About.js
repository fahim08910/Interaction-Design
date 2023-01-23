import React from 'react'
import styled from 'styled-components'

const DiscoverContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 18%;
  font-size: 2rem;
  color: #364156;
`

function About() {
    return (
        <DiscoverContainer>
            This is the About page
        </DiscoverContainer>
    )
}

export default About;
