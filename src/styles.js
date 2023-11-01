import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
  font-family: 'Work Sans', sans-serif;
}

body {
    font-family: 'Work Sans', sans-serif;
    background-color: #a7e1f8;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}`

export const Pill = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`


export const Copyright = styled.p`
  color: #000;
  background: #a7e1f8;
  font-size: 10px;
  text-align: center;
  margin: 0px;
  padding: 10px;

  @media (max-width: 800px) {
    background: rgb(255, 188, 204);
    position: fixed;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
  }
`

export const Button = styled.button`
  display: block;
  border-radius: 30px;
  padding: ${({$hasEmoji}) => ($hasEmoji ? '4px 12px' : '8px')};
  border: 2px solid #000;
  background: transparent;
  //font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: ${({$isHeader}) => ($isHeader ? '0' : '14px')};
  cursor: pointer;
  width: ${({$isHeader}) => ($isHeader ? '140px' : 'unset')};

  @media (max-width: 1000px) {
    font-size: 12px;
    width: ${({$isHeader}) => ($isHeader ? '110px' : 'unset')};
  }
`