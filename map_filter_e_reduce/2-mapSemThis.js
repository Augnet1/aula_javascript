function mapSemThis(arr){
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log('Map Sem This: ', mapSemThis(nums));
console.log('Array original: ', nums);
