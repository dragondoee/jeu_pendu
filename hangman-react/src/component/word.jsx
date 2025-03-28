import React, { useEffect } from 'react';

export function Word({word,setWord,letter}) {
    useEffect(() => {
        fetch('http://localhost:3333',{
          method: 'POST', 
          body : new URLSearchParams({locale : "fr-FR"})
        })
          .then(r => r.json())
          .then((data) => {
            setWord(data.word);          
          })
      }, [])
      // console.log("lettre : ",letter)


      return (
        word.split('').map((letterM, index) => {
          if(letter===letterM){
            return <span key={index}>{letterM}</span>
          }
          else if(letterM === '-'){
            return <span key={index}>-</span>
          } 
          else {
            return <span key={index}>_ </span>
          }

        }
        )
      )
}