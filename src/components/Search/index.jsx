import React, {useRef, useState} from 'react'
import { SearchContainer, Input, Icon, Wrapper, FaveButtonContainer, Counter } from './styles'
import {Close, Button} from '../../styles'


const FaveButton = ({faveBooksLength, toggleShowFaves, showFaves}) => (
  <FaveButtonContainer>
        <Counter>{faveBooksLength}</Counter>
    <Button onClick={toggleShowFaves} $isHeader={true}>
      {showFaves ? 'Hide faves' : 'Show faves'}
    </Button>
  </FaveButtonContainer>
)

const Search = ({ filterBooks, faveBooksLength, toggleShowFaves, showFaves }) => {
    const inputEl = useRef(null)
    const [showOnDesktop, setShowOnDesktop] = useState(false)

    const handleChange = (event) => {
        filterBooks(event.target.value)
    }

    const clearSearch = () => {
        filterBooks('')
        inputEl.current.value = ''
        setShowOnDesktop(false)
    }

    const showSearch = () => {
        setShowOnDesktop(true)
    }
    return (
      <Wrapper>
        <FaveButton
          toggleShowFaves={toggleShowFaves}
          showFaves={showFaves}
          faveBooksLength={faveBooksLength}
        />

        <SearchContainer $showOnDesktop={showOnDesktop}>
          <Icon onClick={showSearch} />
          <Input
            ref={inputEl}
            type="text"
            name="search"
            autoComplete="off"
            onChange={handleChange}
          />
          <Close onClick={clearSearch} />
        </SearchContainer>
      </Wrapper>
    )
}

export default Search