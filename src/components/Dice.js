import React from 'react';
import { useState, useEffect } from 'react';
import dice1 from '../pictures/dice1.png'
import diceblack1 from '../pictures/diceblack1.png'
import dice2 from '../pictures/dice2.png'
import diceblack2 from '../pictures/diceblack2.png'
import dice3 from '../pictures/dice3.png'
import diceblack3 from '../pictures/diceblack3.png'
import dice4 from '../pictures/dice4.png'
import diceblack4 from '../pictures/diceblack4.png'
import dice5 from '../pictures/dice5.png'
import diceblack5 from '../pictures/diceblack5.png'
import dice6 from '../pictures/dice6.png'
import diceblack6 from '../pictures/diceblack6.png'


const images = [dice1, dice2, dice3, dice4, dice5, dice6]; 
const imagesBlack = [diceblack1, diceblack2, diceblack3, diceblack4, diceblack5, diceblack6];
const Dice = ({frozen, setFrozen, values, setValues, rollsLeft, setRollsLeft, counter}) => {
        const chooseDice = (e, i) => {
         const array = [...frozen];
         array[i] = (!frozen[i])
         setFrozen(array)
         
        }

        const roll = () => {
            setValues(handlenewRoll(values, frozen))
            setRollsLeft(rollsLeft -1)
        }

        const handlenewRoll = (current, fixed) => {
            let numbers = [0,0,0,0,0];
            current.forEach((val, i) => {
                numbers[i] = fixed[i] ? current[i] : Math.floor(Math.random() * 6) ;
              });
          
              return numbers;
        }
    return (
        <div className='dice-div'>       
            {frozen.map((value, i) => {
                return(
                 <img key={i} 
                     onClick={(e) => chooseDice(e, i)}
                     src={frozen[i] ? imagesBlack[values[i]] : images[values[i]]} 
                     alt={`dice${i}`} 
                />
            )
               
           })}
           <div className='button-div'>
           <button onClick={roll} disabled = {rollsLeft === 0 || counter === 0 ? 'disabled' : ''}>{rollsLeft} rolls left</button>
           </div>
        </div>
    )
}

export default Dice
