import useFetch from './hooks/useFetch';
import {useEffect, useState} from 'react';
import CardInfo from './hooks/CardInfo';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search'
import './styles/App.css'

function App() {
  const [location, setLocation, loading]= useFetch()
  const [locationId, setLocationId] = useState(1)


  useEffect(() => {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`)
  },[locationId])

 

  
return (
  <>
      <div className='hero' />
       
      <div className='container'>
          <Search setLocationId={setLocationId}/>
          <br/>
      {/*<button onClick= {onPrev}>Before</button>
      <button onClick={onNext}>Next</button>*/}
          <CardInfo location = {location}/> 
          {loading ? (<h1>Loading...</h1>):(<ResidentsList residents={location?.residents}/>)}
          <ResidentsList residents={location?.residents}/>
          
      </div>
      
    </>
    )
  }

export default App;
