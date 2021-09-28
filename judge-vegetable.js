/*
For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best 
based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), 
and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking 
in the provided category.
*/

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 35
  }
]

//const metric = 'redness'
const metric = 'plumpness'


const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let theWinner = vegetables[0];
  for (let i = 1; i < vegetables.length; i++) {
    if (theWinner[metric] < vegetables[i][metric]) {
      theWinner = vegetables[i];
    }
  }
  return theWinner.submitter;
  
}

console.log(judgeVegetable(vegetables, metric))


