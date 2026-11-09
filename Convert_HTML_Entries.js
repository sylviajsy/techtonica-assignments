function convertHTML(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let arr = [];
  for (let char of str) {
    if (char in map) {
      arr.push(map[char]);
    } else {
      arr.push(char);
    }
  }

  return arr.join("");
}

convertHTML("Dolce & Gabbana");