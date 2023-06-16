import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}= useGlobalContext();
  const searchValue= React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const searchFood=()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handelSubmit= (e)=>{
    e.preventDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handelSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Search Food 🍗</label>
          <input type="text" id='name' ref={searchValue} onChange={searchFood}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
