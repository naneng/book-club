import React, {useState, useEffect} from 'react'
import {Transition} from 'react-transition-group'
import  { GlobalStyle, Copyright } from './styles'
import BooksContainer from './components/BooksContainer'
// import {NoBooksContainer, H3, H4, SadFace} from './components/BooksContainer/styles'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([]);
  // const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [showFaves, setShowFaves] = useState(false);
  const faveBookIds = JSON.parse(localStorage.getItem('faveBookIds') || '[]');
  //const [filteredBooks, setFilteredBooks] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        if (!response) {
          throw new Error('Failed to fetch books');
        }
        //console.log(`here's what our fetch request returns`, response)
        const books = await response.json()
        //console.log(`our json-ified response:`, books)
        setBooks((prevBooks) =>
          books.map((book) => ({
            ...book,
            isFaved: faveBookIds.includes(book.id)
          }))
        );
        //setBooks(books.map((book) => ({ ...book, isFaved: faveBookIds.includes(book.id) })))
        
        //setFilteredBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    };
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickBook = (bookId) => {
    // setSelectedBook(bookId)
    setBooks((books) => books.map((book) => ({...book, isPicked: book.id === bookId})))
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const toggleShowFaves = () => {
    setShowFaves((showFaves) => !showFaves)
  }
  
  const toggleFave = (bookId) => {
    setBooks((books) => {
      const updatedBooks = books.map((book) => 
        book.id === bookId ? { ...book, isFaved: !book.isFaved} : book
      )
      
      //const faveBookIds = updatedBooks.filter((book) => book.isFave).map((book) => book.id);
      //localStorage.setItem("faveBookIds", JSON.stringify(faveBookIds))
      localStorage.setItem(
        'faveBookIds',
        JSON.stringify(updatedBooks.filter(({ isFaved }) => isFaved).map(({ id }) => bookId))
        )
      
      return updatedBooks  
    })
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    setBooks((books) =>
      books.map((book) => {
        const isFiltered = !searchTerm 
          ? false                      
          : stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          ? false
          : true
        return {...book, isFiltered: isFiltered}
      })
    )
  }

  //const hasFiltered = filteredBooks.length !==books.length

  // some() method checks if at least one book in the array satisfies the provided condition
  // and we avoid the need to compare the length of the books array to the filteredBooks array.
  

  // const NoBooksMessage = () => {
  //   <NoBooksContainer>
  //     <H3>Oh Dear!</H3>
  //     <SadFace />
  //     <H4>There are no books to see here!</H4>
  //   </NoBooksContainer>
  // }
  
  const hasFiltered = books.some((book) => book.isFiltered)
  

  // function Copyright() {
  //   return <p className="copyright">Copyrights 2023 Katrina Ariola. All rights reserved.</p>
  // }

  // - Write a conditional statement
  //  - If the books have been filtered (by search term), return that filtered book list
  //  - Otherwise, simply return the entire book list
  // const displayBooks = hasFiltered ? filterBooks : books;
  const displayBooks = hasFiltered
    ? books.filter((book) => !book.isFiltered)
    : showFaves
    ? books.filter((book) => book.isFaved)
    : books

  const selectedBook = books.find((book) => book.isPicked)

  //const selectedBook = books.find((book) => book.isPicked)
  return (
    <>
      <GlobalStyle />
      <Header>
        <Search
          filterBooks={filterBooks}
          toggleShowFaves={toggleShowFaves}
          showFaves={showFaves}
          faveBooksLength={faveBookIds.length}
          // style={{opacity: selectedBook.isPicked ? '50%' : '100%'}}
        />
      </Header>
      {/* {books.length > 0 ? ( */}
      <BooksContainer
        //books={filteredBooks}
        //pickBook={pickBook}
        //isPanelOpen={showPanel}
        //title={hasFiltered ? 'Search results' : 'All books'}
        books={displayBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : showFaves ? 'Favorite books' : 'All books'}
      />
      {/* ) : ( */}
      {/* <NoBooksMessage /> */}
      {/* )} */}
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            state={state}
            closePanel={closePanel}
            toggleFave={toggleFave}
          />
        )}
      </Transition>
      <Copyright>Copyrights 2023 Katrina Ariola. All rights reserved.</Copyright>
    </>
  )
}

export default App
