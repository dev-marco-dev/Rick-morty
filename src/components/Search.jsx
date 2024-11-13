import { useRef, useState } from "react"
import '/src/styles/search.css'



function Search( {setLocationId}) {
    const [error, setError] = useState("")
    const inputRef = useRef()
    
    const onSubmit = (e) =>{
        e.preventDefault()

       const id = parseInt(inputRef.current.value)
       

       if(isNaN(id)){
        setError('🙁 Please, write a valid number!!!')
        setTimeout(() => {
            setError('')
        }, 3000)
        return
       }
       if (id < 1 ||  id > 126 ){
        setError('🙁 Please, write a number from 1 to 126!!!')
       setTimeout(() => {
           setError('')
       }, 3000)
       return
    }
    setLocationId(id)
    e.target.reset()
}
  
    
return (
    <>
    <form onSubmit={onSubmit} className="search">
        <input className="search__input" ref={inputRef} type='text' placeholder="Write a number from 1 to 126" />
        <button className="search__btn">Search</button>
        
    </form>
    <p className="message__error"> {error && error }</p>

    </>
  )
}

export default Search


 