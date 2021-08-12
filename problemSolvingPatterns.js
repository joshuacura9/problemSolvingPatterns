//algorithim common approaches to problems  

//FREQUENCY PATTERN
//this pattern uses objects or sets to collect values/frquencies of values AVOID NESTED LOOPS!
//anagram problem 'anagram' 'nagaram' true 'rat' 'car' false 

function validAnagram(first, second) {
//checks to see if strings are the same length right away if not returns false
  if (first.length !== second.length) {
    return false;
  }
//use a object frequency counter
  const lookup = {};
// loop through the first string create an object of the first string
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
// if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
// can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm'));
console.log(validAnagram('rat', 'tar'));



//MULTIPLE POINTERS 
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]));



//Sliding Window 
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

//divide and conquer problem solving pattern 

function search(array, val) {
  let min = 0;
  let max = array.length -1; 

  while (min <= max) { 
    let middle = Math.floor((min+max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle - 1;
    } 
    else {
      return middle; 
    }
    return -1;
  }
}




