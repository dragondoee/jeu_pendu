export function Alphabet({ tabLetters, onLetterSelect }) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    return (
      <div>
        {letters.map((letter, index) => (
          <button key={index} onClick={() => onLetterSelect(letter)} disabled={tabLetters.includes(letter)}>
            {letter}
          </button>
        ))}
      </div>
    );
  }
  