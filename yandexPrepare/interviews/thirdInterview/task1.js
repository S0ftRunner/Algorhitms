function intersectionSet(arr1, arr2){


  const intersection = arr1.filter(value => arr2.includes(value));
  console.log(intersection.sort());
}


intersectionSet([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]);