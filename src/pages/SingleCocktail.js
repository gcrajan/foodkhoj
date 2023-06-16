import React,{useEffect, useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}= useParams();
  const [loading,setLoading]= useState(false);
  const[food,setFood]=useState(null);
  useEffect(()=>{
    setLoading(true);
    async function getFood(){
      try {
        const response= await fetch(`${url}${id}`);
        const data=await response.json();
        if(data.meals){
          const {strMeal:name,strCategory:category,strArea:area,strInstructions:instructions,strMealThumb:image,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11}=data.meals[0];
          const ingredients= [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11];
          const newFood={
            name,image,area,category,instructions,ingredients
          }
          setFood(newFood);
        }else{
          setFood();
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getFood()
  },[id])
  if(loading){
    return <Loading/>
  }
  if(!food){
    return <h2 className='section-title'>No Food 🤬</h2>
  }
  const {name,image,area,category,instructions,ingredients}=food;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primaey'>Back to home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className='drink-data'>Name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>Category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Area:</span>
            {area}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {ingredients.map((item,index)=>{
              return item?<span key={index}>{item}</span>:null
            })}
          </p>
        </div>
      </div>
      <p className='ingredientsPara'>
            <span className='drink-data'>Instructions:</span>
            {instructions}
          </p>
    </section>
  )
}

export default SingleCocktail
