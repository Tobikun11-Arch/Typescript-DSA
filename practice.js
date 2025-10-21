const nums = [2,7,11,15]
const target = 9

//expected output: [0,1]

function twoSum(nums, target) {
  let num1 = 0
  let store = 0
  let store1 = 0

  nums.forEach(element => {
    const elementTarget = target - element;
    num1 = store + elementTarget
    if(num1 == target) {
      console.log(nums.indexOf(store1))
      console.log(nums.indexOf(element))
    }
    store = elementTarget
    store1 = element
  });
}

twoSum(nums, target)