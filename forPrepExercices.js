// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sum(arr) {
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result += arr[i] 
	}
	return result
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sum(arr) {
	var result = 0;
	var i = 0
	while(i < arr.length){
		result += arr[i]
		i++
	}
	return result
}
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function max(arr) {
	var result = arr[0]
	for(var i = 1; i < arr.length; i++) {
		if(result < arr[i]){
			result = arr[i]
		}
	}
	return result
}
/////////////////////////////////   While Loop   ///////////////////////////////////////////////////////
function max(arr) {
	var result = arr[0];
	var i = 1
	while (i < arr.length) {
		if(result < arr[i]){
			result = arr[i]
	}
	i++
}
return result
}
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
function longestWord (string) {	
var arr = string.split(' ');
	var result = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (result.length < arr[i].length){
			result = arr[i]
		}
	}
	return result
}
//////////////////////   While Loop  ///////////////////////////////////////////
function longestWord (string) {	
var arr = string.split(' ');
	var result = arr[0];
	var i = 1;
	while(i < arr.length){
		if (result.length < arr[i].length){
			result = arr[i]
		}
		i++
	}
	return result
}


// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

// function remove(array, element) {
//  // your code here
//  }
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
function remove (arr, element) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== element) {
			result.push(arr[i])
		}
	}
	return result
}
/////////////////////////   While Loop   /////////////////////////////////////////////
function remove (arr, element) {
	var result = [];
	var i = 0
	while ( i < arr.length) {
		if (arr[i] !== element) {
			result.push(arr[i])
		}
		i++
	}
	return result
}
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
function evens (arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0){
			result.push(arr[i])
		}
	}
	return result
}
/////////////////////   While Loop   //////////////////////////////////////////////////
function evens (arr) {
	var result = [];
	var i = 0;
	while( i < arr.length) {
		if (arr[i] % 2 === 0){
			result.push(arr[i])
		}
		i++
	}
	return result
}
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function average(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i]
	}
	return result / arr.length
}
/////////////////   While Loop  //////////////////////////////////////////////////////
function average(arr) {
	var result = 0;
	var i = 0;
	while(i < arr.length){
		result += arr[i]
		i++
	}
		return result / arr.length
}
// 2. Write a function called min that finds the smallest number in an array of numbers.
function min(arr) {
	var result = arr[0]
	for(var i = 0; i < arr.length; i++){
		if(result > arr [i]) {
			result = arr[i]
		}
	}
	return result
}
//////////////////////  While Loop /////////////////////////////////////////////////
function min(arr) {
	var result = arr[0];
	var i = 0;
	while( i < arr.length){
		if(result > arr [i]) {
			result = arr[i]
		}
		i++
	}
	return result
}
// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestWord (string) {	
var arr = string.split(' ');
	var result = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (result.length > arr[i].length){
			result = arr[i]
		}
	}
	return result
}
//////////////////////  While Loop ///////////////////////////////////////////////
function shortestWord (string) {	
var arr = string.split(' ');
	var result = arr[0];
	var i = 1;
	while(i < arr.length){
		if (result.length > arr[i].length){
			result = arr[i]
		}
		i++
	}
	return result
}
// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.
function countChar (string, character) {
	var result = 0;
	for(var i = 0; i < string.length; i++){
		if(string[i] === character) {
			result ++
		}
	}
	return result
}
//////////////////////////// While Loop  /////////////////////////////////////////////////
function countChar (string, character) {
	var result = 0;
	var i = 0;
	while(i < string.length) {
		if(string[i] === character) {
			result ++
		}
		i++
	}
	return result
}
// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
function evenLengthWords(arr) {
	var result = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i].length % 2 === 0){
			result.push(arr[i])
		}
	}
	return result	
}
///////////////////// While Loop  ////////////////////////////////////////////////////
function evenLengthWords(arr) {
	var result = [];
	var i = 0;
	while( i < arr.length){
		if(arr[i].length % 2 === 0){
			result.push(arr[i])
		}
		 i++
	}
	return result	
}
// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed
function reversed(string) {
	var arr = string.split('');
	var result = []
	for(var i = arr.length-1; i >= 0; i--){
		result.push(arr[i])
	}
console.log(result)
	
	return result.join('')
}
// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.
// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
function keep (arr, something) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (){
			result.push(arr[i])
		}
	}
	return result
}