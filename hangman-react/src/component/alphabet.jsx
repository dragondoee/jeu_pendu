import { useEffect } from 'react';

export function Alphabet({ tabLetters, onLetterSelect }) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    const handleClick = (e) => {
        onLetterSelect(e.target.innerHTML);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key.toLowerCase();
            if (/^[a-z]$/.test(key) && !tabLetters.includes(key)) {
                onLetterSelect(key);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [tabLetters, onLetterSelect]);

    return (
        <div className='clavier'>
            {letters.map((letterBut, index) => (
                <button 
                    key={index} 
                    onClick={handleClick} 
                    disabled={tabLetters.includes(letterBut)}
                >
                    {letterBut}
                </button>
            ))}
        </div>
    );
}
