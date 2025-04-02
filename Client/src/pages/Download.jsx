import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const App = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/downloads").then((res) => setDownloads(res.data));
  }, []);

  const removeDownload = (id) => {
    axios.delete(`http://localhost:5000/downloads/${id}`).then(() => {
      setDownloads(downloads.filter((item) => item._id !== id));
    });
  };

  return (
    <Container>
      <h2 className="mt-4">Your Downloads</h2>
      <Row>
        {downloads.length > 0 ? (
          downloads.map((item) => (
            <Col key={item._id} md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={item.cover} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <strong>Type:</strong> {item.type} <br />
                    {item.artist && <><strong>Artist:</strong> {item.artist}</>}
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeDownload(item._id)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No downloads available</p>
        )}
      </Row>
    </Container>
  );
};

export default App;
