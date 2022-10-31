import axios from 'axios';
import { useEffect, useState } from 'react';



const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

export default function Cocktail() {
    const [strDrink, setstrDrink] = useState('')
    const [strInstructions, setstrInstructions] = useState('')
    const [strGlass, setstrGlass] = useState('')
    const [strImg, setstrImg] = useState('')

    useEffect(() => {
        axios.get(url)
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
            <h3>Cocktail of the day</h3>
            <p>{strDrink}</p>
            <h3>Instructions</h3>
            <p>{strInstructions}</p>
            <h3>Glass:</h3>
            <p>{strGlass}</p>
            <img src={strImg} alt="" />
        </div>
    );

}
