// Types of Array

//Numbers array
let typeNumbers: number[] = [1, 2, 3, 4];

//String array
let typeString: String[] = ['String 1', 'String 2'];

//Mix aarray
let typeMix: (number | String)[] = ['Jan', 'Joenel', 2, 'jake', 1, 10];

//Generic Array string
let typeGenericString: Array<String> = ['General city', 'Bacoor city', 'Cavite city'];

//Generic Array numbers
let typeGenericNumber: Array<number> = [10, 56, 23];

//Generic Array string and number
let typeGenericMix: Array<String | number> = [24, 'oneString', 2, 15];



// Access Element of all types of array
const accessNumbers: number = typeNumbers[1]
console.log(accessNumbers) //Access the 2nd number in array

const accessString: String = typeString[1]
console.log(accessString) //Access 2nd string in array

const accessMix: String | number = typeMix[5]
console.log(accessMix) //Access the mix array
//Accessing Generic array are same with non generic array waay


//Array Methods:

//push method - will add new value (last element) to existing array
//length method - count how many element is in array
console.log(typeGenericMix)
if(typeGenericMix.length > 3) {
  typeGenericMix.push("Generic")
}
console.log(typeGenericMix)

//pop method - remove the last element in array
if(typeGenericMix.length > 4) {
  typeGenericMix.pop()
}
console.log(typeGenericMix)

//map method - array will be add or change based on what u want to add
//String with method 
console.log(typeGenericString)
typeGenericString.map((city)=> city.trim())

console.log(typeGenericString)














