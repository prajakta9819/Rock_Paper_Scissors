import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rockImg = (
  <img src="https://img.icons8.com/color/150/000000/hand-rock.png" />
);
const scissorsImg = (
  <img src="https://img.icons8.com/color/150/000000/hand-peace--v1.png" />
);
const paperImg = <img src="https://img.icons8.com/color/150/000000/hand.png" />;
const weapon = ["rock", "paper", "scissors"];

const images = { rock: rockImg, scissors: scissorsImg, paper: paperImg };

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winner, setWinner] = useState(null);

  function selectWinner() {
    if (player1 === player2) {
      return "Oops it's a Tie!";
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock")
    ) {
      return "Player 1 Wins!";
    } else {
      return "Player 2 Wins!";
    }
  }

  useEffect(() => {
    if (player1 && player2) {
      const winner = selectWinner();
      setWinner(winner);
    }
  }, [player1, player2]);

  function selectPlayer2Weapon() {
    const randomIndex = Math.floor(Math.random() * weapon.length);
    setPlayer2(weapon[randomIndex]);
  }

  function selectWeapon(weapon) {
    setPlayer1(weapon);
    selectPlayer2Weapon();
  }

  return (
    <>
      <div className="App">
        <h1>ROCK-PAPER-SCISSOR GAME</h1>
      </div>

      <div className="container">
        <div className="player1">
          <h3>Player 1</h3>
          {player1 && <h4>{images[player1]}</h4>}
        </div>

        <div className="buttons-container">
          <button className="btn-rock" onClick={() => selectWeapon("rock")}>
            <h3>Rock</h3>
            {rockImg}
          </button>
          <div className="buttons-row2">
            <button className="btn-paper" onClick={() => selectWeapon("paper")}>
              <h3>Paper</h3>
              {paperImg}
            </button>
            <button
              className="btn-scissor"
              onClick={() => selectWeapon("scissors")}
            >
              <h3>Scissor</h3>
              {scissorsImg}
            </button>
          </div>
        </div>

        <div className="player2">
          <h3>Player 2</h3>
          {player2 && <h4>{images[player2]}</h4>}
        </div>
      </div>

      {winner && <h1>{winner}</h1>}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
