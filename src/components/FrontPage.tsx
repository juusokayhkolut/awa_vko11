import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
// @ts-ignore
import useJokes from "../hooks/useJokes";
import { IJoke } from "../types/Joke";

const FrontPage: React.FC<{ saveJoke?: (joke: IJoke) => void }> = ({ saveJoke }) => {
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data: IJoke = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Failed to fetch joke", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
      <Typography variant="h4">Welcome to Joke Generator</Typography>
      {loading ? (
        <Typography>Loading a joke...</Typography>
      ) : (
        joke && (
          <Card sx={{ width: "50%", textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h6">{joke.setup}</Typography>
              <Typography variant="body1">{joke.punchline}</Typography>
            </CardContent>
          </Card>
        )
      )}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={fetchJoke} disabled={loading}>Get Joke</Button>
        <Button variant="contained" color="secondary" onClick={() => saveJoke?.(joke!)} disabled={!joke}>Save Joke</Button>
      </Box>
    </Box>
  );
};

export default FrontPage;