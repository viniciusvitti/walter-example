import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'
import { Link } from 'react-router-dom'

import Plus from '../assets/Plus.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectsContainer = styled.div`
  height: 100%;
  width: 5vw;
  background-color: ${Colors.DarkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0;
`

const Divider = styled.div`
  width: 50%;
  margin: 1vh 0 2.5vh;
  border-bottom: 0.1vh solid ${Colors.Grey};
  opacity: 0.5;
`

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  color: ${Colors.White};
  cursor: pointer;
`

const IconContainer = styled.div`
  width: 3.5vw;
  height: 6.5vh;
  border-radius: 0.4vw;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-bottom: 2.5vh;
`

const ProjectIcon = styled.img`
  width: 100%;
  height: 100%;
`

const IconOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.Grey};
  opacity: 0.5;
  z-index: 2;
`

const AddContainer = styled(IconContainer)`
  border: 0.1vw solid rgba(88, 98, 109, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const AddIcon = styled.img`
  height: 50%;
  width: 50%;
`

const PagesContainer = styled.div`
  height: 100%;
  width: 20vw;
  padding: 2.5vh 2vw;
  box-sizing: border-box;
  background-color: ${Colors.DarkerGrey};
`

const ProjectName = styled.div`
  font-size: 1.2rem;
  color: ${Colors.White};
  font-weight: bold;
  margin-bottom: 0.5vh;
`

const SubName = styled.div`
  font-size: 0.8rem;
  color: ${Colors.Grey};
  font-weight: normal;
  margin-bottom: 2vh;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2vh;
  cursor: pointer;
`

const LinkIcon = styled.img`
  width: 1.8vw;
  height: 3.2vh;
  margin-right: 0.8vw;
`

const LinkTxt = styled.div`
  font-size: 0.9rem;
  color: ${Colors.Grey};
  font-weight: bold;
`

function NavBar(props) {
  return (
    <Container>
      <ProjectsContainer>
        <Logo>walter</Logo>
        <Divider />
        {props.project && props.project.map(item => (
          <IconContainer key={item.id}>
            <IconOverlay />
            <ProjectIcon src={item.icon} alt="" />
          </IconContainer>
        ))}
        <AddContainer>
        <AddIcon src={Plus} alt="" />
        </AddContainer>
      </ProjectsContainer>
      <PagesContainer>
        <ProjectName>Gestion ABC</ProjectName>
        <SubName>All buildings</SubName>
        {props.pages && props.pages.map(item => (
          <Link key={item.id} to={item.to} style={{ textDecoration: 'none' }}>
            <LinkContainer>
              <LinkIcon src={props.active === item.page ? item.iconActive : item.icon} alt="" />
              <LinkTxt style={{ color: props.active === item.page && Colors.White }}>{item.page}</LinkTxt>
            </LinkContainer>
          </Link>
        ))}
      </PagesContainer>
    </Container>
  );
}

export default NavBar
