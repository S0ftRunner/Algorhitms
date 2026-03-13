function neutralise(s1, s2) {
  if (s1.length !== s2.length) return;
  const resultArr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === "+" && s1[i] === s2[i]) {
      resultArr.push("+");
      continue;
    }

    if (s1[i] === "-" && s1[i] === s2[i]) {
      resultArr.push("-");
      continue;
    }

    if (s1[i] !== s2[i]) {
      resultArr.push("0");
    }
  }

  return resultArr.join("");
}

console.log(neutralise("-++-", "-+-+"));
