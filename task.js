function checkAnagram(basicWord, checkWord) {
  console.log(basicWord.length, checkWord.length)
  if(basicWord.length !== checkWord.length) {
    return 'This is not an anagram'
  }
  if(basicWord.toLowerCase().split('').sort().join() === checkWord.toLowerCase().split('').sort().join()) {
    return 'This is an anagram'
  }
}
console.log(checkAnagram('cat', 'tac'))

const prices = [7,1,5,3,6,4]
function checkProfit(array) {
  let maxProfit = 0;
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let rest = array.slice(i + 1)
    const maxPriceForItem = item - Math.min(...rest)
    if(maxPriceForItem > maxProfit) {
      maxProfit = maxPriceForItem;
    }
  }
  console.log(maxProfit)
  return maxProfit;
}

checkProfit(prices)