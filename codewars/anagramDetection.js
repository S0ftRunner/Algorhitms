var isAnagram = function(test, original) {
  const firstAnagram = test.toLowerCase().split('').sort().join('');
  const secondAnagram = original.toLowerCase().split('').sort().join('');


  console.log(firstAnagram);
  console.log(secondAnagram);

}

isAnagram('Buckethead', "DeathCubeK");