//Corporal, Marc Lloyd G.
//CS-403

import React, { useState } from 'react';
import './Game.css';

const imageUrls = [
  'https://thumbs.dreamstime.com/z/hd-d-chicken-bird-cartoon-inventive-character-designs-crazy-chicken-cartoon-animation-png-image-featuring-realistic-294406330.jpg?ct=jpeg',
  'https://thumbs.dreamstime.com/z/png-d-banana-isolated-transparent-background-generative-ai-high-quality-rendered-format-created-using-appears-realistic-382643552.jpg?ct=jpeg',
];

function Game() {
  const gs = 6;
  const total = gs * gs;

  const [images, setImages] = useState(Array(total).fill('question'));
  const [revealed, setRevealed] = useState(Array(total).fill(false));
  const [player, setPlayer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const choosePlayer = (choice) => {
    setPlayer(choice);
    const newImages = Array(total)
      .fill()
      .map(() => (Math.random() > 0.5 ? 'b' : 'c'));
    setImages(newImages);
    setRevealed(Array(total).fill(false));
    setGameOver(false);
    setMessage('');
  };

  const handleClick = (index) => {
    if (gameOver || revealed[index]) return;

    const updatedRevealed = [...revealed];
    updatedRevealed[index] = true;
    setRevealed(updatedRevealed);

    if (player === 'b' && images[index] === 'c') {
      setGameOver(true);
      setMessage('YOU LOST! PLAYER CHICKEN WON!');
      return;
    }

    if (player === 'c' && images[index] === 'b') {
      setGameOver(true);
      setMessage('YOU LOST! PLAYER BANANA WON!');
      return;
    }
  };

  const restartGame = () => {
    setImages(Array(total).fill('question'));
    setRevealed(Array(total).fill(false));
    setGameOver(false);
    setPlayer(null);
    setMessage('');
  };

  const renderGrid = () => {
    return images.map((img, index) => (
      <div
        key={index}
        className="square"
        onClick={() => handleClick(index)}
        style={{
          backgroundImage: revealed[index]
            ? `url(${imageUrls[img === 'b' ? 1 : 0]})`
            : "url('https://via.placeholder.com/90x90?text=??')",
        }}
      >
        {!revealed[index] && <span className="qn">?</span>}
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="game-title">Chicken Banana Game</h1>

      {!player ? (
        <div>
          <h2>Which Player Are You?</h2>
          <button onClick={() => choosePlayer('b')}>Banana Player</button>
          <button onClick={() => choosePlayer('c')}>Chicken Player</button>
        </div>
      ) : (
        <div>
          <h2>{player === 'b' ? 'Banana Player: Only Click The Bananas!' : 'Chicken Player: Only Click The Chickens'}</h2>
          <div className="grid">{renderGrid()}</div>

          {gameOver && message && (
            <div className="game-message">
              <h3>{message}</h3>
            </div>
          )}

          {gameOver && (
            <div className="restart-container">
              <button onClick={restartGame} className="restart-btn">
                Restart Game
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;