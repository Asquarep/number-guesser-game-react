import React, { useEffect, useState } from 'react';
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
      setGuess('')
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
    if (attempts - 1 <= 0) {
      setFeedback(`Game over! The correct number was ${secretNumber}.`);
      setAttempts(0)
    }
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    const level = e.target.value;
    setDifficulty(level);
  };

  const restartGame = () => {
    setSecretNumber(generateSecretNumber());
    setGuess('');
    setFeedback('');
  };

  useEffect(()=> {
    setAttempts(difficulty === 'easy' ? 10 : difficulty === 'medium' ? 7 : 5);
    restartGame();
  },[difficulty])

  return (
    <div className="game">
      <h1>Number Guesser Game</h1>
      <label>
        Select Difficulty:
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <p>Guess the number between 1 and 100</p>
      <input type="number" value={guess} onChange={handleInputChange} />
      <div>
        <button className='restart' onClick={restartGame}>Restart</button>
        <button className='guess' onClick={handleGuess}>Guess</button>
      </div>
      <p>{feedback}</p>
      <p>Attempts remaining: {attempts}</p>
    </div>
  );
};

export default NumberGuesser;
