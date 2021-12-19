import React, {useEffect, useState} from 'react'
const calculateTotalScore = (rules) => {
    let totalScore = 0;

    rules.forEach(rule => {
        totalScore += rule.values ? rule.calculator(rule.values) : 0;
    });

    return totalScore;
};

const Score = ({rules}) => {
    const totalScore = calculateTotalScore(rules);
    const [highScore, setHighScore] = useState(0)

    
    useEffect(() => {
        const high = JSON.parse(localStorage.getItem('highScore'))
        setHighScore(high);
    }, [])
    
    useEffect(() => {
        
        if(highScore < totalScore){
            setHighScore(totalScore)
        }
       localStorage.setItem('totalScore', JSON.stringify(totalScore))
       localStorage.setItem('highScore', JSON.stringify(highScore))
    }, [totalScore, highScore]);
    return (
        <div className='score-div'>
            <div className='total-score'>
                Total Score: {totalScore}
            </div>
           <div className='high-score'>
                {highScore !==0 && 
                `High Score ${highScore}` }
            </div>
        </div>
    )
}

export default Score
