import axios from 'axios';
import { useEffect, useState } from 'react';



const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function Cocktail() {
  const [search, setSearch] = useState('')
  const [strDrink, setstrDrink] = useState('')
  const [strInstructions, setstrInstructions] = useState('')
  const [strGlass, setstrGlass] = useState('')
  const [strImg, setstrImg] = useState('')
  const strIngredients = [];
  const strMeasure = [];

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

        for (let i = 0; i < 16; i++) {
          if (response.data.drinks[0].strIngredients+{i}==null) {
            break;
          }
          console.log(i);
          strIngredients=response.data.drinks[0].strIngredients+{i};
          strMeasure=response.data.drinks[0].strMeasure+{i};
        }
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
        <h3>Ingredients</h3>
        <p>{strIngredients}</p>
        <h3>Glass:</h3>
        <p>{strGlass}</p>
        <img src={strImg} alt="" />
      </div>);
  }