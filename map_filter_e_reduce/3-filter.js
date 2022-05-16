function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 ===0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 33, 4]

console.log('Array só com pares: ', filtraPares(meuArray));
console.log('Array original: ', meuArray);