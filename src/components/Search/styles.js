import styled from 'styled-components'
import { Pill } from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    gap: unset;
  }
`

export const SearchContainer = styled(Pill)`
    width: ${({ $showOnDesktop }) => ($showOnDesktop ? '420px' : '20px')};
    transition: 300ms;
    /* margin-right: 8px; */

    
    input,
    button {
        display: ${({ $showOnDesktop }) => ($showOnDesktop ? 'block' : 'none')};
        
        @media (max-width: 1000px) {
            display: block;
        }
    }

    @media (max-width: 1000px) {
        width: 50%;
        margin-right: 8px;
    }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
    width: 20px;
    cursor: pointer;
`


export const FaveButtonContainer = styled.div`
  display: flex;
  margin-right: 12px;
  /* bottom: 0; */

  @media (max-width: 1000px) {
    position: relative; /* has a relative position */
    left: -20px; /* moves left by -15px */
    /* margin-bottom: 0px; */
    margin-right: 8px;
  }
`

export const Counter= styled(Pill)`
    margin-bottom: 0;
    position: relative;
    right: -140px;
    bottom: 10px;
    padding: 4px;

    @media (max-width: 1000px) {
        right: -120px;
        padding: 2px;
    }
`