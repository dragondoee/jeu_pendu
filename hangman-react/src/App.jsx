import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Word } from './component/word'
import { Alphabet } from './component/alphabet'

const App = () => {
  const [word, setWord] = useState('')
  const [letter, setLetter] = useState('')
  const [tabLetters, setTabLetters] = useState([])
  const [erreur, setErreur] = useState(0)
  return(
    <>
    <h1>Jeu du Pendu</h1>
    <h2>Nombre d'erreurs : {erreur}</h2>
    <p>lettre séléctionné : {letter}</p>
    <Word word={word} setWord={setWord} letter={letter} />
    <Alphabet letter={letter} setLetter={setLetter} tabLetters={tabLetters} setTabLetters={setTabLetters} />
    </>
  )
}

export default App