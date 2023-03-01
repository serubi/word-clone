import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputForm from "../GuessInputForm/GuessInputForm";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);

  function handleAddGuess(guess) {
    const newGuess = checkGuess(guess, answer);
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer || nextGuesses.length === NUM_OF_GUESSES_ALLOWED)
      setGameEnded(true);
    if (guess === answer) setGameWon(true);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInputForm gameEnded={gameEnded} handleAddGuess={handleAddGuess} />
      {gameEnded && (
        <Banner type={gameWon ? "happy" : "sad"}>
          {gameWon ? (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guesses.length} guess{guesses.length > 1 && "es"}
              </strong>
              .
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
