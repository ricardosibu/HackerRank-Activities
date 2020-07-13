const arr = [6,-4,3,-9,0,4,1];
let positive = [];
let negative = [];
let neutro = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        positive.push(arr[i]);
    } else if(arr[i] == 0) {
        neutro.push(arr[i]);
    } else {
        negative.push(arr[i]);
    }
}

 
const fractionPositive = positive.length / arr.length;
const fractionNeutro = neutro.length / arr.length;
const fractionNegative = negative.length / arr.length;
console.log(fractionPositive.toFixed(6));
console.log(fractionNegative.toFixed(6));
console.log(fractionNeutro.toFixed(6));