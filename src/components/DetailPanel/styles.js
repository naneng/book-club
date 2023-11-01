import styled from 'styled-components'
import {Pill} from '../../styles'


export const BG = styled.div`
background:rgba(0,0,0,0.5);
cursor: pointer;
position: fixed;
height: 100vh;
width: 100vw;
top: 0;
z-index:1;
opacity: ${({ $state }) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
pointer-events: ${({ $state }) => ($state === 'exited' ? 'none' : 'auto')};
transition: 300ms;
`

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  transition: 300ms;
  overflow: scroll;

  @media (max-width: 1000px) {
    border-left: none;
    padding: 40px 86px 20px 30px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    /* right: unset; */
    z-index: 3;
  }

  @media (max-width: 800px) {
    /* height: calc(100vh-74px); */
  }
`
export const CloseWrapper = styled(Pill)`
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
  
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 1000px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const Em = styled.em`
  font-style: italic;
`


export const Button = styled.button`
  border: 2px solid black; /* thin, black border */
  border-radius: 30px; /* round border radius */
  padding: 4px 8px; /* inner spacing */
  background-color: transparent; /* transparent background */
  //font-family: Arial, sans-serif; /* font styles */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer; /* pointer-style cursor */
  margin-bottom: 14px; /* bottom margin */
`