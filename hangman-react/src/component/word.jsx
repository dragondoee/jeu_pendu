import React, { useEffect } from 'react';

export function Word({ word, setWord, tabLetters }) {
  useEffect(() => {
    fetch('http://localhost:3333', {
      method: 'POST',
      body: new URLSearchParams({ locale: 'fr-FR' }),
    })
      .then((r) => r.json())
      .then((data) => {
        setWord(data.word);
      });
  }, []);

  return (
    <p>
      {word.split('').map((letter, index) =>
        tabLetters.includes(letter) || letter === '-' ? (
          <span key={index}>{letter} </span>
        ) : (
          <span key={index}>_ </span>
        )
      )}
    </p>
  );
}
