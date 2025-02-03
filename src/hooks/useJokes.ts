import { useState } from "react";
import { IJoke } from "../types/Joke";  // Import IJoke type

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([]);

  const saveJoke = (joke: IJoke) => {
    setSavedJokes([...savedJokes, joke]);
  };

  const deleteJoke = (id: number) => {
    setSavedJokes(savedJokes.filter((j) => j.id !== id));
  };

  return { savedJokes, saveJoke, deleteJoke };
};

export default useJokes;