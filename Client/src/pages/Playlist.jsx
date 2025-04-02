import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const App = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/playlists").then((res) => setPlaylists(res.data));
  }, []);

  return (
    <Container>
      <h2 className="mt-4">Your Playlists</h2>
      <Row>
        {playlists.map((playlist) => (
          <Col key={playlist._id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={playlist.cover} alt={playlist.name} />
              <Card.Body>
                <Card.Title>{playlist.name}</Card.Title>
                <Card.Text>
                  <strong>Created by:</strong> {playlist.creator} <br />
                  <strong>Songs:</strong> {playlist.songs.length} <br />
                  <strong>Followers:</strong> {playlist.followedBy.length}
                </Card.Text>
                <Button variant="primary">Follow</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
