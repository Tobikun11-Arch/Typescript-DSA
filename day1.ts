// Types of Array

//Numbers array
let typeNumbers: number[] = [1, 2, 3, 4];

//String array
let typeString: String[] = ['String 1', 'String 2'];

//Mix aarray
let typeMix: (number | String)[] = ['Jan', 'Joenel', 2, 'jake', 1, 10];

//Generic Array string
let typeGenericString: Array<String> = ['General city', '  Bacoor city', 'Cavite city', 'General city'];

//Generic Array numbers
let typeGenericNumber: Array<number> = [10, 56, 23];

//Generic Array string and number
let typeGenericMix: Array<String | number> = [24, 'oneString', 2, 15];

//Data testing for find etc...
let typeAge: number[] = [18, 21, 23, 19, 34]
let Countries: String[] = ['Spain', 'Japan', 'Thailand', 'China', 'South Korea']

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
//String with map method 
console.log(typeGenericString)
const stringTrim: String[] = typeGenericString.map((city)=> city.trim())
console.log(stringTrim)

//Numbers with map method 
console.log(typeNumbers)
const numbers: number[] = typeNumbers.map((number)=> number * 5)
console.log(numbers)

//forEach method - seperate each other 
const forEachNumbers = typeNumbers.forEach((number)=> {
  if(number > 2) {
    console.log(number + 10)
  }
})

//filter method - accepting passing method, common sense used for comparison etc...
const filterCities: String[] = typeGenericString.filter((city) => city == "General city")
console.log("This is filtered cities: ", filterCities)


//reduce method - used to combine all elements in an array into a single value.
const typeAddAge: number = typeAge.reduce((acc, arr)=> acc + arr)
console.log(typeAddAge)


//find method - used to get the first element in an array that satisfies the given condition (returns true in the function)
const findBigAge: number | undefined = typeAge.find((age) => age > 18)
console.log(findBigAge)


//splice method - use to arrange,replace and removed  data on array
console.log(Countries)

//remove [1] element, before index [0], remove + condition + new value

//expectation: [Philippines, Thailand, China, South Korea]
//How to read: Remove 2 Elements from index 0
Countries.splice(0, 2, "Philippines") //Add and remove - Change
console.log(Countries)

//expectation: [Philippines, Thailand, China, South Korea, North Korea]
Countries.splice(4, 0, "North Korea")
console.log(Countries)

//expectation: [Philippines, Thailand, US, South Korea, North Korea]
Countries.splice(2, 1,"US")
console.log(Countries)


//remove [0] elements, starting [0] remove + condition for what will be remove in array
Countries.splice(0, 1)
console.log(Countries)

//remove all - remove: How to read- Remove all starting index number
//expectation: [South Korea]
Countries.splice(2)
console.log(Countries)  