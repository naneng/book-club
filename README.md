Book Club App

# Libraries Used:

react-transition-group
- used for creating transitions and animations in React components.


# State Variables

The App component uses several state variables defined using the useState hook:

- books represents the list of all books in the book club.
- selectedBook represents the currently selected book.
- showPanel is a boolean variable that determines whether the detail panel is visible or not.
filteredBooks represents the list of books that match the search term entered by the user.

The books state variable and the filteredBooks state variable are updated with the fetched data using the setBooks and setFilteredBooks functions, respectively.

# Helper Functions

The pickBook function is called when a user selects a book. It updates the selectedBook state variable with the selected book and sets the showPanel state variable to true, which opens the detail panel.

The closePanel function is called when the user closes the detail panel. It sets the showPanel state variable to false, which hides the detail panel.

The filterBooks function is called when the user enters a search term. It filters the books array based on the search term and updates the filteredBooks state variable accordingly. If the search term is empty, all books are considered a match.


# Rendering Components

The App component returns JSX elements that represent the different parts of the book club application. Here's a breakdown of the JSX elements being rendered:

<GlobalStyle /> renders the global styles for the application.
<Header> renders the header component, which includes a search bar for filtering books.
<BooksContainer> renders the books container component, which displays the list of books. It receives the books and filteredBooks state variables, the pickBook function, and the isPanelOpen boolean as props.
<Transition> wraps the <DetailPanel> component and provides a transition effect when the detail panel is shown or hidden. It receives the showPanel state variable as the in prop and a timeout value of 300 milliseconds.
<DetailPanel> renders the detail panel component, which displays information about the selected book. It receives the selectedBook, closePanel, and state props.
<Copyright> renders the copyright notice.










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

