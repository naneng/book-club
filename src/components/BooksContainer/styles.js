import styled from 'styled-components'
import {ReactComponent as SadSVG} from '../../assets/sad-face.svg'

export const SadFace = styled(SadSVG)`
  margin: 20px 0;
`

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? 'fixed' : 'relative')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px`: 0)};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`

export const NoBooksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  flex-direction: column;
`
export const H3 = styled.h3`
  margin: 0;
  font-size: 34px;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`

export const H4 = styled.h4`
  margin: 0;
  font-size:24px;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`

