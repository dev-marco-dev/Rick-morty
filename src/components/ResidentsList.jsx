import ResidentCard from './ResidentCard'
import { useState } from 'react'
import '../styles/ResidentsList.css'


 function ResidentsList({residents}) {
 
  const [page, setPage] = useState(1)
  const elementsPerPage = 5
  const totalElements = location ? location.length : 0
  const maxPage = Math.ceil(totalElements / elementsPerPage)
 const currentPageItem = residents ? residents?.slice((page - 1) * elementsPerPage, page * elementsPerPage) : [] 

 const onPrev = () => {
setPage(page - 1)
  }

  const onNext = () => {
    setPage( page + 1)
  }

  return (
    <div className='cards'>
        {currentPageItem.map(resident => {
            const residentSplit = resident.split('/')
            const id = residentSplit[residentSplit.length - 1]
            return(
            <ResidentCard key={id} url={resident}/>
            
        )})}
       

    </div>
  )
}

export default ResidentsList