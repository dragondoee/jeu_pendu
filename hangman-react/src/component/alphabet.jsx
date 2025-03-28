
export function Alphabet({letter, setLetter, tabLetters, setTabLetters}) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const handleChange=(e)=>{
        setLetter(e.target.innerHTML)
        setTabLetters([...tabLetters, e.target.innerHTML])
        console.log(e.target.innerHTML)
        console.log(tabLetters) 
        }
    return (
        <div>
            {letters.map((letterBut, index) => {
                if(tabLetters.includes(letterBut)){
                    console.log("disabled")
                    return <button key={index} disabled> {letterBut} </button>
                } else {
                    return <button key={index} onClick={handleChange}> {letterBut} </button>
                }
            }
                
            )}
        </div>
    )
}