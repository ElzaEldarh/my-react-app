const Book = ({ book }) => {
  return (
    <div>
      <h4>{book.title}</h4>
      <p>Autor:{book.autor}</p>
      <p>Year of publication:{book.year}</p>
      <p>Genre:{book.genre}</p>
    </div>
  );
};
export default Book;
