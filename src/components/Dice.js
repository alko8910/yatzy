import React from 'react';
import { useState, useEffect } from 'react';
import dice1 from '../pictures/dice1.png'
import dice2 from '../pictures/dice2.png'
import dice3 from '../pictures/dice3.png'
import dice3black from '../pictures/dice3black.png'
import dice4 from '../pictures/dice4.png'
import dice5 from '../pictures/dice5.png'
import dice6 from '../pictures/dice6.png'

const images = [dice1, dice2, dice3, dice4, dice5, dice6]; 
const imagesBlack = dice3black;
const Dice = ({frozen, setFrozen, values, setValues}) => {

    //const [bgColorToggle, setBgColorToggle] = useState(false)
    const style = {
        backgroundColor: 'blue',
        borderRadius: '10px'
    }
    const style1 = {

    }
const newGame = () => {
        setValues([
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), 
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6), 
            Math.floor(Math.random() * 6)
        ]);
        setFrozen([true, false, true, false, false])
        
    }

    useEffect(() => newGame(), []);

    const chooseDice = (e, i) => {
        console.log(i)
        frozen[i] = (!frozen[i])
        console.log(frozen)
        console.log(frozen[i])
        
    }
    //style={bgColorToggle ? style : style1 }
    return (
        <div>       
            {frozen.map((value, i) => {
                return(
                 <img key={i} 
                    
                    onClick={(e) => chooseDice(e, i)}
                    src={frozen[i] ? imagesBlack : images[values[i]]}  
                    alt={`dice${i}`} 
                />
            )
               
           })}
        </div>
    )
}

export default Dice
