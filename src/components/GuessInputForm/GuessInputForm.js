import React from "react";

function GuessInputForm({ handleAddGuess, gameEnded }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess("");
        handleAddGuess(guess);
        console.log({ guess: guess });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        disabled={gameEnded}
        required
        pattern="[a-zA-Z]{5}"
        title="Enter any 5-letter word"
      />
    </form>
  );
}

export default GuessInputForm;
