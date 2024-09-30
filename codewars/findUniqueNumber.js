function findUnique(numbers) {
  let repeated = numbers.filter((item, index) => numbers.indexOf(item) !== index)
  return numbers.filter((item)=> item !== repeated[0])[0]
}
