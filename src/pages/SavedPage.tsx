import React from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import { IJoke } from "../types/Joke";

const SavedPage: React.FC<{ savedJokes: IJoke[]; deleteJoke: (id: number) => void }> = ({ savedJokes, deleteJoke }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
      <Typography variant="h4">Saved Jokes</Typography>
      {savedJokes.length === 0 ? (
        <Typography>No saved jokes yet.</Typography>
      ) : (
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", width: "80%" }}>
          {savedJokes.map((joke) => (
            <Card key={joke.id} sx={{ textAlign: "center", p: 2 }}>
              <CardContent>
                <Typography variant="h6">{joke.setup}</Typography>
                <Typography variant="body1">{joke.punchline}</Typography>
                <Button variant="contained" color="error" onClick={() => deleteJoke(joke.id)}>Delete</Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SavedPage;