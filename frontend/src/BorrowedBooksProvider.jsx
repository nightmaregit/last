// BorrowedBooksProvider.jsx
import React, { useState, createContext, useCallback } from "react";

const BorrowedBooksContext = createContext();

const BorrowedBooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addBorrowedBook = useCallback((book) => {
    setBorrowedBooks((prevBooks) => [...prevBooks, book]);
  }, []);

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, addBorrowedBook }}>
      {children}
    </BorrowedBooksContext.Provider>
  );
};

export { BorrowedBooksProvider, BorrowedBooksContext };
