import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import * as bookShelfAPI from "../services/bookshelf-api";
import PageHeading from "../components/PageHeading";
import Filter from "@/components/Filter";
import { useSelector } from "react-redux";
import { getCurrentFilter } from "@/redux/selectors";

export default function BooksView() {
  const [books, setBooks] = useState([]);
  const controller = useRef(null);

  const filter = useSelector(getCurrentFilter);
  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()));
  return(
    <>
      <PageHeading text="Книги" />

      <Filter />

      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Oopps something was wrong</p>
      )}
    </>
  );
}