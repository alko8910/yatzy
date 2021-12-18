import React, {useState} from 'react'
import Header from './Header';
import Dice from './Dice';
import Table from './Table';
import categoryScore from './categoryScore';
import totalScore from './totalScore';

const Game = () => {
    const [frozen, setFrozen] = useState([false, false, false, false, false]);
    const [values, setValues] = useState ([0, 0, 0, 0, 0])
    
    const [scoreRules, setScoreRules] = useState([
        {
            label: 'Ones',
            description: 'Score 1 for every 1',
            example:'1 1 2 3 4 = 2',
            calculator: categoryScore.sumOfSameNumber(0),
            values: null,
        },
        {
            label: 'Twos',
            description: 'Score 2 for very 2',
            example:'1 2 2 3 4 = 4',
            calculator: categoryScore.sumOfSameNumber(1),
            values: null,
        },
        {
            label: 'Threes',
            description: 'Score 3 for every 3',
            example:'1 2 3 3 3 = 9',
            calculator: categoryScore.sumOfSameNumber(2),
            values: null,
        },
        {
            label: 'Fours',
            description: 'Score 4 for every 4',
            example:'1 2 4 4 5 = 8',
            calculator: categoryScore.sumOfSameNumber(3),
            values: null,
        },
        {
            label: 'Fives',
            description: 'Score 5 for every 5',
            example:'1 2 5 5 5 = 15',
            calculator: categoryScore.sumOfSameNumber(4),
            values: null,
        },
        {
            label: 'Sixes',
            description: 'Score 6 for every 6',
            example:'1 2 3 6 6 = 12',
            calculator: categoryScore.sumOfSameNumber(5),
            values: null,
        },
        {
            label: '3 of Kind',
            description: 'If 3+ od one value, score sum od all dice',
            example:'1 2 3 3 3 = 12',
            calculator: categoryScore.threeOfAKind,
            values: null,
        },
        {
            label: '4 of Kind',
            description: 'If 4+ od one value, score sum od all dice',
            example:'1 2 2 2 2 = 9',
            calculator: categoryScore.fourOfAKind,
            values: null,
        },
        {
            label: 'Full House',
            description: 'If 3 od one value and 2 of another, score 25',
            example:'2 2 3 3 3 = 25',
            calculator: categoryScore.fullHouse,
            values: null,
        },
        {
            label: 'Small Straight',
            description: 'If 4+ values in a row, score 30',
            example:'1 2 3 4 6 = 30',
            calculator: categoryScore.smallStraight,
            values: null,
        },
        {
            label: 'Large Straight',
            description: 'If 5+ values in a row, score 40',
            example:'1 2 3 4 5 = 40',
            calculator: categoryScore.largeStraight,
            values: null,
        },
        {
            label: 'Yatzy',
            description: 'If all avalues match, score 50',
            example:'2 2 2 2 2 = 50',
            calculator: categoryScore.yatzy,
            values: null,
        },
        {
            label: 'Chance',
            description: 'score sum of all dice',
            example:'1 2 3 4 6 = 16',
            calculator: categoryScore.chance,
            values: null,
        }
    ])

   // const reset = () => setScoreRules(scoreRules.map(rule => ({ ...rule, values: null })))

    const onRuleClick = (rule) => {
        const newRules = scoreRules.map((r) => {
            if (r === rule && !r.values) {
                return {
                    ...r,
                    values: values
                };
            }

            return r;
        })

        setScoreRules(newRules);
    }

    return (
        <>        <div>
               <Header />
                 <Dice
                 frozen={frozen}
                 setFrozen={setFrozen}
                 values={values}
                 setValues={setValues}
                 />
                 
        </div>
        <div>
            <Table rules={scoreRules} onRuleClick={onRuleClick} />
        </div>
        <totalScore />
        </>

    )
}

export default Game
