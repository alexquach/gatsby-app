import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, StyledParticles, StyledHeroText } from "./styles"
import { AnimatedWave, DownArrow } from "./"
import Particles from 'react-particles-js'
import { css } from "@emotion/core"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const Hero = ({ imageAlt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fixed(width: 972, height: 1297) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledHero id={id}>
      <StyledParticles>
        <Particles css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}/>
      </StyledParticles>
      
      <StyledHeroText>
        <Typist 
          avgTypingDelay={1}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }} 
          css={css`
          font-size: 3em;
          color: white;
          display: inline-block`}>
            Hi. I'm Alex
        </Typist>
        <Typist
          startDelay={2000}
          avgTypingDelay={0}>     
          Computer&nbsp;Scientist
          <Typist.Delay ms={100}/> | Data&nbsp;Scientist 
          <Typist.Delay ms={100}/> | ML&nbsp;Engineer 
          <Typist.Delay ms={100}/> | Entrepreneur
          <Typist.Delay ms={500}/>...
        </Typist>
        <DownArrow></DownArrow>
      </StyledHeroText>
      
      <AnimatedWave enableWave bottom={true} />
    </StyledHero>
  )
}

export default Hero
