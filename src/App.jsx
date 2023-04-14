import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      setBooks(books)

      // try {
      //   const response = await fetch('https://book-club-json.herokuapp.com/books')
      //   console.log(`here's what our fetch request returns`, response)
      //   const books = await response.json()
      //   console.log(`our json-ified response:`, books)
      //   setBooks(books)
      // } catch (errors) {
      //   console.log(errors)
      // }
    }
    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  console.log(selectedBook)
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} picBook={pickBook} />
    </>
  )
}

export default App
