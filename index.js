// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office")=>{
  return `This Monday, I will ${activity}.`

}
const wrapAdjective = (symbol) => {
  return function(word="special"){
    return `You are ${symbol}${word}${symbol}!`
  }

}