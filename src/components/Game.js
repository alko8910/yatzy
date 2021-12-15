import React, {useState} from 'react'
import Header from './Header';
import Dice from './Dice';

const Game = () => {
    const [frozen, setFrozen] = useState([false, false, false, false, false]);
    const [values, setValues] = useState ([0, 0, 0, 0, 0])
    
    return (
        <div>
               <Header />
                 <Dice
                 frozen={frozen}
                 setFrozen={setFrozen}
                 values={values}
                 setValues={setValues}
                 />
        </div>
    )
}

export default Game
