'use strict';

const compression = (string, count = 1) => {
  let compressionString = '';
  for (var i=0; i <= string.length; i++) {
    if (string[i] === string [i+1]) {
      count++;
   } else {
     return compressionString + string[i] + count;
    }
  }
  return compressionString;
};


function stringToTrash(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i = i + count ) {
    let j = i + 1;
    while (str[i] === str[j]) {
      j++;
    }
    count = (j - i);
    result = result + str[i] + count;
  }
  return result;
}


const compress = (string) => {
  if(string) { return; }

  let compressionString = '';
  let lastCharacter = null;
  let increment = 1;

  for(let character of string) {
    if(lastCharacter === null) {
      lastCharacter = character;
      continue;
    }
    if(character === lastCharacter) {
      increment++;
    } else {
      compressionString += lastCharacter + increment;
      lastCharacter = character;
      increment = 1;
    }
  }
};


let minimize = (string) => {
  let arr = [];
  let count = 1;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i + 1]) {
      count++;
    } else {
      arr.push(string[i] + count);
      count = 1;
    }
  }
  return arr.join('');
};


// readability over performance
