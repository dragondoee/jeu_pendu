import { useState, useEffect } from 'react';
import './App.css';
import { Word } from './component/word';
import { Alphabet } from './component/alphabet';

const App = () => {
  const [word, setWord] = useState('');
  const [tabLetters, setTabLetters] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const handleLetterSelection = (selectedLetter) => {
    if (!tabLetters.includes(selectedLetter)) {
      setTabLetters([...tabLetters, selectedLetter]);

      if (!word.includes(selectedLetter)) {
        setErrors(errors + 1);
      }
    }
  };

  useEffect(() => {
    if (word && word.split('').every((letter) => tabLetters.includes(letter) || letter === '-')) {
      setWin(true);
    }
    if (errors >= 11) {
      setGameOver(true);
    }
  }, [tabLetters, errors, word]);

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <>
      <h1>Jeu du Pendu</h1>
      <h2>Nombre d'erreurs : {errors}/11</h2>
      
      {win && <h2> Vous avez gagné ! </h2>}
      {gameOver && <h2> Perdu ! Le mot était : {word} </h2>}

      {(win || gameOver) && <button onClick={resetGame}>🔄 Recommencer</button>}

      <Word word={word} setWord={setWord} tabLetters={tabLetters} />
      {!win && !gameOver && (
        <Alphabet tabLetters={tabLetters} onLetterSelect={handleLetterSelection} />
      )}
    </>
  );
};

export default App;
