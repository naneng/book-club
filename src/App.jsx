import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log(`here's what our fetch request returns`, response)
        const books = await response.json()
        console.log(`our json-ified response:`, books)
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }
    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(true)
  }

  console.log(selectedBook)
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={showPanel} />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}
    </>
  )
}

export default App
