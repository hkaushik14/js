const marvel_heroes = ["thor", "ironman", "spiderman", "hulk", "blackwidow"];
const dc_heroes = ["batman", "superman", "wonderwoman", "flash", "aquaman"];

marvel_heroes.push("dc_heroes");

// console.log(marvel_heroes);

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heros);


const another_array =[1,2,3,[4,5,6],7,8];
const flattened_array = another_array.flat();
console.log(flattened_array);

const deep_array = [1,2,[3,4,[5,6]]];
const deep_flattened_array = deep_array.flat(2);
console.log(deep_flattened_array);

console.log(Array.isArray(marvel_heroes)); // true
console.log(Array.isArray("hello")); // false interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

