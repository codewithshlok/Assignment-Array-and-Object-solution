// Q2. The following is an array of 10 students ages :
// const ages = [19,22,19,24,20,25,26,24,25,24]
// 1. Sort the array and find tha min and max age
// 2. Find the median age (One middle item or two middle item dividing by two)
// 3. Find the average age 
// 4. find the range of the ages (max minus min)
// 5. compare the value of (min-average) and (max-average) , use abs() method.


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find the min and max age
ages.sort((a, b) => a - b); // Sort the array in ascending order
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// 2. Find the median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

// 3. Find the average age
const sumOfAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumOfAges / ages.length;

// 4. Find the range of ages
const range = maxAge - minAge;

// 5. Compare the values of (min - average) and (max - average), use abs() method
const diffMinToAvg = Math.abs(minAge - averageAge);
const diffMaxToAvg = Math.abs(maxAge - averageAge);

// Print the results
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Difference between Minimum and Average Age:", diffMinToAvg);
console.log("Difference between Maximum and Average Age:", diffMaxToAvg);
