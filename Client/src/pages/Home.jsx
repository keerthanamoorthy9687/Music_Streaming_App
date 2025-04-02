import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Home = () => {
  const featuredPlaylists = [
    { id: 1, title: "Top 50 Global", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Chill Vibes", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Workout Hits", image: "https://via.placeholder.com/150" },
  ];

  const trendingSongs = [
    { id: 1, title: "Song 1", artist: "Artist 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Song 2", artist: "Artist 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Song 3", artist: "Artist 3", image: "https://via.placeholder.com/150" },
  ];

  const newReleases = [
    { id: 1, title: "New Album 1", artist: "Artist A", image: "https://via.placeholder.com/150" },
    { id: 2, title: "New Album 2", artist: "Artist B", image: "https://via.placeholder.com/150" },
    { id: 3, title: "New Album 3", artist: "Artist C", image: "https://via.placeholder.com/150" },
  ];
   const artist = [
    { id: 1, title: "New Album 1", artist: "Artist A", image: "https://via.placeholder.com/150" },
    { id: 2, title: "New Album 2", artist: "Artist B", image: "https://via.placeholder.com/150" },
    { id: 3, title: "New Album 3", artist: "Artist C", image: "https://via.placeholder.com/150" },
  ];
  const genre=[
    {id:1,type:"HipHop"},{id:1,type:"Classical"},{id:1,type:"melody"},{id:1,type:"party"}
  ]


  return (
    <>
       <section className="header">
        <div className="head-sec"><Header/></div>
        <div className="navbar"><Navbar/></div>
      </section>
    <Container className="container-1">
      <h2 className="text-center mb-3">Welcome to Beatify</h2>

      {/* Featured Playlists */}
      <section className="mb-5">
        <h2> Featured Playlists</h2>
        <Row>
          {featuredPlaylists.map((playlist) => (
            <Col key={playlist.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={playlist.image} />
                <Card.Body>
                  <Card.Title>{playlist.title}</Card.Title>
                  <Button variant="primary">Play Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Trending Songs */}
      <section className="mb-5">
        <h2> Trending Songs</h2>
        <Row>
          {trendingSongs.map((song) => (
            <Col key={song.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={song.image} />
                <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>{song.artist}</Card.Text>
                  <Button variant="success">Play</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* New Releases */}
      <section>
        <h2> New Releases</h2>
        <Row>
          {newReleases.map((album) => (
            <Col key={album.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={album.image} />
                <Card.Body>
                  <Card.Title>{album.title}</Card.Title>
                  <Card.Text>{album.artist}</Card.Text>
                  <Button variant="warning">Listen Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      {/* Artist */}
      <section>
        <h2>Artist</h2>
        <Row>
          {artist.map((art) => (
            <Col key={art.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={art.image} />
                <Card.Body>
                  <Card.Title>{art.title}</Card.Title>
                  <Card.Text>{art.artist}</Card.Text>
                  <Button variant="warning">Listen Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      {/* genre */}
      <section>
        <h2>Genre</h2>
        <Row>
          {genre.map((data) => (
            <Col key={data.id} md={4} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  
                
                  <Button variant="warning">{data.type}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
     <section className="footer">
      <div><Footer/></div>
      
    </section>
   
      </>
  );
};

export default Home;

