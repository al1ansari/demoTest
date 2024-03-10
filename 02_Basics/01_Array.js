const arr = [1,2,3,4,5]
// console.log(arr)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allHeroes = [...dc_heros,...marvel_heros]
// console.log(allHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = another_array.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray([1,2,3,4,5]))