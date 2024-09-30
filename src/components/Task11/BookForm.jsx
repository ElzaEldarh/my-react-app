import { useState } from "react";

const BookForm = ({ setBooks, books }) => {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const addBook = (event) => {
    event.preventDefault();
    setBooks([...books, { title, autor, year, genre }]);
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={addBook}>
        <div>
          <label>
            Book name:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Autor name:
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Year of publication:
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Genre:
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            ></input>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default BookForm;
