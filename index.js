// Code your solutions in this file
const arr = []
function writeCards(array, string) {
  for (let i = 0; i < array.length; i++) {
    arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
  }
  return arr;
}

function countDown(number) {
  for (let i = number; i >=0; i--){
    console.log(i);
  }
}