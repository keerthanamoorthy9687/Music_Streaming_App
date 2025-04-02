import React, { useState } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const sampleData = [
    { id: 1, type: "Song", title: "Blinding Lights", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
    { id: 2, type: "Album", title: "After Hours", artist: "The Weeknd", image: "https://via.placeholder.com/150" },
    { id: 3, type: "Playlist", title: "Top Hits", artist: "Various Artists", image: "https://via.placeholder.com/150" },
    { id: 4, type: "Artist", title: "The Weeknd", artist: "", image: "https://via.placeholder.com/150" },
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setResults([]);
    } else {
      const filteredResults = sampleData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <Container className="py-5">
      {/* <h1 className="text-center mb-4">🔍 Search Music</h1> */}

      {/* Search Input */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for songs, artists, albums..."
          value={query}
          onChange={handleSearch}
        />
      </Form.Group>

      {/* Search Results */}
      <Row>
        {results.length > 0 ? (
          results.map((item) => (
            <Col key={item.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.artist}</Card.Text>
                  <span className="badge bg-primary">{item.type}</span>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          null
          // <p className="text-center text-muted">No results found</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchPage;
