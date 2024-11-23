import React, { useState } from 'react';
import './App.css';

const generateSecretNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGuesser = () => {
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setFeedback('Please enter a valid number between 1 and 100.');
      return;
    }

    if (numGuess === secretNumber) {
      setFeedback('Congratulations! You guessed the correct number!');
    } else if (numGuess < secretNumber) {
      setFeedback('Too low!');
    } else {
      setFeedback('Too high!');
    }

    setAttempts(attempts - 1);
    if (attempts - 1 === 0) {
      setFeedback(`Game over! The correct number was ${secretNumber}.`);
    }
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    const level = e.target.value;
    setDifficulty(level);
    setAttempts(level === 'easy' ? 10 : level === 'medium' ? 7 : 5);
    restartGame();
  };

  const restartGame = () => {
    setSecretNumber(generateSecretNumber());
    setGuess('');
    setFeedback('');
    setAttempts(difficulty === 'easy' ? 10 : difficulty === 'medium' ? 7 : 5);
  };

  return (
    <div className="game">
      <h1>Number Guesser Game</h1>
    </div>
  );
};

export default NumberGuesser;
