import axios from 'axios';
import { useEffect, useState } from 'react';



const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function Cocktail() {
  const [search, setSearch] = useState('')
  const [strDrink, setstrDrink] = useState('')
  const [strInstructions, setstrInstructions] = useState('')
  const [strGlass, setstrGlass] = useState('')
  const [strImg, setstrImg] = useState('')

  function searchdrink() {

    const searchurl = url + search
    axios.get(searchurl)
      .then((response) => {
        console.log(searchurl)
        console.log(response.data)
        setstrDrink(response.data.drinks[0].strDrink);
        setstrInstructions(response.data.drinks[0].strInstructions);
        setstrGlass(response.data.drinks[0].strGlass);
        setstrImg(response.data.drinks[0].strDrinkThumb);


      })
  }

  useEffect(() => {
    axios.get(url + { search })
      .then((response) => {
        console.log(response.data)
        setstrDrink(response.data.drinks[0].strDrink);
        setstrInstructions(response.data.drinks[0].strInstructions);
        setstrGlass(response.data.drinks[0].strGlass);
        setstrImg(response.data.drinks[0].strDrinkThumb);
      })

  }, [])
  if (!strDrink) {
    
      return <div><h3>Search cocktails</h3>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="button" onClick={searchdrink} >search</button>
    </div>
  }
  else {
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="button" onClick={searchdrink} >search</button>
        <h3>Cocktail of the day</h3>
        <p>{strDrink}</p>
        <h3>Instructions</h3>
        <p>{strInstructions}</p>
        <h3>Glass:</h3>
        <p>{strGlass}</p>
        <img src={strImg} alt="" />
      </div>);
  }
}