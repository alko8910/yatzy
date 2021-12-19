
const sortValues = (values) => {
    let arr  = new Array(...values);
    return arr.sort((a, b) => a - b);
}

const sumDice = (values) => {
    return values.reduce((a, b) => a + b)
}

const sumOfSameNumber = (val) => (values) => values.filter((num) => num === val).length * (val + 1);

  //rijeseno
const threeOfAKind = (values) => {
    let score = 0;
    let dice = sortValues(values);
    
    [0,1,2].forEach((i) => {
        if(dice[i] === dice[i + 1] && dice[i] === dice[i + 2]){
            score = sumDice(values) + 5;
        }
    })
    return score;
}
const fourOfAKind = (values) => {
    let score = 0;
    let dice = sortValues(values);

    [0,1].forEach((i) => {
        if(dice[i] === dice[i + 1] &&
            dice[i] === dice[i + 2] &&
            dice[i] === dice[i + 3]){
                score = sumDice(values) + 5;
            }
    })
    return score;
}

const fullHouse = (values) => {
    let score = 0;
    let dice = sortValues(values);

    if((dice[0] === dice[1] &&
        dice[2] === dice[3] &&
        dice[2] === dice[4]) 
        ||
        (dice[0] === dice[1]&&
         dice[0] === dice[2] &&
         dice[3] ===dice[4])
        ){
            score = 25
        }
        console.log(score)
        return score
}

const smallStraight = (values) => {
    let score = 0;
    let dice = sortValues(values);
    //11110
    if(((dice[0] + 1) === dice[1] &&
        (dice[0] + 2) === dice[2] &&
        (dice[0] + 3) === dice[3] )
         
        ||
        //01111
        ((dice[1] + 1) === dice[2] &&
         (dice[1] + 2) === dice[3] &&
         (dice[1] + 3) === dice[4] )
          
         || 

         ((dice[0] + 1) === dice[1] &&
         (dice[0] + 2) === dice[2] &&
         (dice[0] + 3) === dice[4] 
        )
        || 
        //11011
        ((dice[0] + 1) === dice[1] &&
        (dice[0] + 2) === dice[3] &&
        (dice[0] + 3) === dice[5] 
       ) 
       ){
            score = 30
        }
        
        return score;
}

const largeStraight = (values) => {
    let score = 0;
    let dice = sortValues(values);
    if((dice[0] + 1) === dice[1] &&
        (dice[0] + 2) === dice[2] &&
        (dice[0] + 3) === dice[3]&&
        (dice[0] + 4) === dice[4]) {
            score = 40
        }
        return score;
}

const yatzy = (values) => {
    let score = 0;
   let dice = values[0];
   if(values.every(element => element === dice)){
        score = 50
}
    return score;
    
}

const chance = (values) => {
  return sumDice(values) + 5;
}

const categoryScore = {
    sumOfSameNumber,
    threeOfAKind,
    fourOfAKind,
    fullHouse, 
    smallStraight,
    largeStraight,
    yatzy,
    chance

}
export default  categoryScore;