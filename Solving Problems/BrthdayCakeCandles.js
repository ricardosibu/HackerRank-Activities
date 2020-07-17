/*You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. 
When she blows out the candles, she’ll only be able to blow out the tallest ones. 
Your task is to find out how many candles she can successfully blow out.*/

const ar = [3,2,1,3];
    let maxElement = Math.max(...ar);
    let filterCandles = ar.filter(element => element === maxElement);
    const candles = filterCandles.length;
    console.log(candles);

