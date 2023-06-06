import React from 'react';
const sortFunction = (a, b) => {
  let aCount = 0;
  let bCount = 0;
  for (let i of a.reactions) {
    aCount += i.count;
  }
  for (let i of b.reactions) {
    bCount += i.count;
  }
  //console.log('aaaaa', aCount)
  //console.log('bbbbb', bCount)
  if (aCount > bCount) {
    //console.log('a:',aCount,'b:',bCount)
    return -1;
  } else if (bCount > aCount) {
    //console.log('b:',bCount,'a:',aCount)
    return 1;
  }
};

export default sortFunction;
