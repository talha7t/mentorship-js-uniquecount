let arr = [1,1,1,2,2,1,4,4,3,1]

// function to return unique values
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
// storing unique values in an array
const uniqueElements = arr.filter(unique)

//counting numbers of times unique value appears in the given array
uniqueElements.forEach(element => {
  countInArray(arr, element)
})


// function to count number of times an element appears in an array
function countInArray(array, what) {
    let elementCount =  array.filter(item => item === what).length;
    console.log(`number of times ${what} appeared = ${elementCount}`)
}
