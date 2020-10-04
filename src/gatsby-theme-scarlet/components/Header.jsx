import { React, useState } from "react"
import { Container, Styled } from "theme-ui"
import Anime from "react-anime"
import { StyledHeader, Nav, NavItem, NavList, NavLink, logoStyle} from "./styles"
import logo from "../images/logo.svg"

const Header = () => {

  const [logoHovered, setLogoHovered] = useState(0)

  return (
    <StyledHeader>
      <Container style={{maxWidth: 95+"%"}}>
        <Nav>
          <div style={{flexDirection: "row", display: "flex", 
            alignItems: "center", flexWrap: "nowrap"}}
          >
            <Styled.img as={NavLink} href="#hero" 
              onMouseEnter={()=>setLogoHovered(1)}
              onMouseLeave={()=>setLogoHovered(0)}
            >
              <Anime rotateZ={[0, logoHovered*360]}>
                <img css={logoStyle} src={logo}/>
              </Anime>
            </Styled.img>

            <Anime 
              opacity={[0, logoHovered]}
              duration={500}
              easing="easeInOutElastic"
              direction="alternate"
              translateX={["-5px", "15px"]}
              >
              <NavLink href="#hero">Alex Quach</NavLink>
            </Anime>
          </div>

            
          <NavList>
            <NavItem>
              <NavLink href="#work">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
