const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // for (l of horizontalJoin) {
    //     // if (l.includes(word)) return true
    //     if (l === (word)) return true
    // } 
    if (letters.length === 0) return false;
    let newArray = [];
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        if (newArray[j]) {
            newArray[j].push(letters[i][j])
          
        } else {
            newArray[j] = [letters[i][j]];
        }
      }
    }
    const verticalJoin = newArray.map(ls => ls.join(''))
    if (horizontalJoin.includes(word)) return true
    else if (verticalJoin.includes(word)) return true
    return false;

}

module.exports = wordSearch