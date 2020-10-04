import React from "react"
import { Container, WhiteContainer } from "../components/container"
//import AnimatedWave from "gatsby-theme-scarlet" 

export default function Home({ data }) {
  return (
    <div>
      <Container>
        <div> Main Picker! <br>
          </br>Generate a random color, and try your best to match it on the picker! Good luck!
          </div>
          <br></br>

          <div>Your Guess:</div>
          <div id="color-box"></div>

          <div style={{ marginTop: '20px' }}>
              Share/Compete with friends by sending them the link!
          </div>
      </Container>
      <WhiteContainer>
        Something
      </WhiteContainer>
    </div>
  )
}
