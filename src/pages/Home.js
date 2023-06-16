import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
      <section className='home-footer'>
        <p> <span>Link to API:</span> <a href="https://www.themealdb.com/api.php" target='_blank'>https://www.themealdb.com/api.php</a> </p>
      </section>
    </main>
  )
}

export default Home
