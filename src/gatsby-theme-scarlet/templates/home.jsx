import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { Global } from "@emotion/core";
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui";
import { Layout, Styled } from "theme-ui";
import { Header, Hero, Section, Footer, Experience, DownArrow } from "../components";
import { SectionWrap, ProjectList } from "../components/styles";
import { globalStyles } from "./styles";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";


const HomeTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteAuthor
          siteLogoText
          siteUrl
          siteLanguage
          siteDescription
          siteKeywords
        }
      }
      dataJson {
        hero {
          imageAlt
        }
        work {
          content
          heading
        }
        about {
          heading
          content
        }
      }
      allProjectsJson {
        nodes {
          name
          link
          alt
          badge
          image
        }
      }
    }
  `)
  const projectsItems = data.allProjectsJson.nodes
  const { about, work, hero } = data.dataJson
  const {
    siteTitle,
    siteLogoText,
    siteDescription,
    siteLanguage,
  } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <Layout>

        <Helmet>
          <html lang={siteLanguage} />
          <title>{siteTitle}</title>
          <meta name="Description" content={siteDescription} />
        </Helmet>

        <Global styles={globalStyles} />
        <Header logoTxt={siteLogoText} />

        <SectionWrap>

          <Hero id="hero" />

          <Section backgroundColor={theme.colors.white} id="work">
            <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
              <Styled.h2>Experience</Styled.h2>
            </ScrollAnimation>

            <Experience></Experience>
          </Section>

          <Section
            backgroundColor={theme.colors.primary}
            id="about"
            light
            enableWave={true}
            waveBottom={false}
          >
            <br></br>
            <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
              <Styled.h2>About Me</Styled.h2>
              <Styled.p>Hey! I'm Alex, an undergraduate at MIT studying Computer Science
                As you might notice from my quite varied work experience, I love trying new things
                and am always looking to learn something. 
                <br/><br/>
                I'm passionate about responsible AI as it pertains to making machine learning more transparent,
                interpretable, safe, fair, private, and robust. I'm also interested in the entrepreneurship space, 
                where I'm getting involved in the vibrant Boston ecosystem as a potential founder and as a sourcing investor. 
                I hope to combine these two fields of interest in the future.
              </Styled.p>
            </ScrollAnimation>
          </Section>

        </SectionWrap>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default HomeTemplate
