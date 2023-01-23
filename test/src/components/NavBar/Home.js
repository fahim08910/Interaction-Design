import React from 'react'
import styled from 'styled-components'
const HomeContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18%;
    font-size: 2rem;
    color: #364156;
    @media (max-width:700px){
        
        margin-top: -10%;
        
      }`
      


function Home() {
    return (
        <HomeContainer>
        This is Home page
        </HomeContainer>
    )
}

export default Home
