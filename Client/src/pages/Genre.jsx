import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get("http://localhost:5000/api/genres");
      setGenres(data);
    };
    fetchGenres();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">🎶 Browse by Genre & Mood</h1>
      <Row>
        {genres.map((genre) => (
          <Col key={genre.name} md={4} className="mb-3">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={genre.image} />
              <Card.Body>
                <Card.Title>{genre.name}</Card.Title>
                <span className="badge bg-primary">Genre</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GenresPage;
