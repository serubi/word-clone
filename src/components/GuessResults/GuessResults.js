import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className="guess" key={index}>
          <Guess guess={guesses[index]} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
