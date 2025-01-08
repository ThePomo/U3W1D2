import Card from "react-bootstrap/Card";
import books from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((book) => (
        <Card key={book.id} className="m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} alt={book.title} style={{height:'400px'}}/>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllTheBooks;