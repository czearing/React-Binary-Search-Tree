import React from "react";
import "./App.css";

//data to be sorted
let data = [5, 3, 4, 7, 9, 1];

//swap function
function swap(data, first, second) {
  //sets data 1 and 2 to data 2 and 1
  [data[first], data[second]] = [data[second], data[first]];
}

//partition function
function partition(data, left, right) {
  //declares a pivot point in the center of the dataset
  let pivot = data[Math.floor((right + left) / 2)];

  //while the left index is less than or equal to the right index run
  while (left <= right) {
    //while the left data is less than center data move to next index
    while (data[left] < pivot) {
      left++;
    }
    //while the right data is greater than center data move to next index
    while (data[right] > pivot) {
      right--;
    }
    //if the left index is less than the right swap indexs and move left and right index
    if (left <= right) {
      swap(data, left, right);
      left++;
      right--;
    }
  }
  //return the left index
  return left;
}

//recursive part of the function
function recursive(data, left, right) {
  let index;
  //if their are at least 2 items, sort data
  if (data.length > 1) {
    //index = the left index returned from patrition algorithm
    index = partition(data, left, right);
    //if the left most index (0) is less than partition-1, run
    if (left < index - 1) {
      //re-run partition alg with right = to the previous left index -1
      recursive(data, left, index - 1);
    }
    //if the right most index (0) is greater than partition, run
    if (index < right) {
      //re-run partition alg with left = to the previous left index
      recursive(data, index, right);
    }
  }
  //return sorted data
  return data;
}

//Calls the recursive function
export default function App() {
  return <div className="App">{recursive(data, 0, data.length - 1)}</div>;
}
