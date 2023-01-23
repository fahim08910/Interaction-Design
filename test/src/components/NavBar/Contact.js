import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 18%;
  font-size: 2rem;
  color: #364156;
`

function Contact() {
    return (
        <HomeContainer>
            This is the Contact page
        </HomeContainer>
    )
}

export default Contact;