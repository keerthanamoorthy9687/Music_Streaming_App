import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";

const NowPlaying = () => {
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio();

  useEffect(() => {
    const fetchSong = async () => {
      const { data } = await axios.get("http://localhost:5000/api/now-playing");
      setSong(data);
      audio.src = data.audioUrl;
    };
    fetchSong();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Container className="py-5 text-center">
      {song ? (
        <Card className="shadow-lg p-4">
          <Card.Img variant="top" src={song.albumArt} className="rounded mb-3" />
          <Card.Body>
            <h2>{song.title}</h2>
            <h5 className="text-muted">{song.artist}</h5>
            <p><strong>Album:</strong> {song.album}</p>

            {/* Playback Controls */}
            <div className="my-3">
              <Button variant="primary" onClick={togglePlay}>
                {isPlaying ? "Pause ⏸" : "Play ▶"}
              </Button>
            </div>

            {/* Lyrics Section */}
            <Card className="mt-4 p-3 bg-light">
              <h5>Lyrics:</h5>
              <p>{song.lyrics}</p>
            </Card>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading song details...</p>
      )}
    </Container>
  );
};

export default NowPlaying;
