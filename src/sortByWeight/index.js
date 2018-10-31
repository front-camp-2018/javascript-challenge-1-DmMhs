/* eslint-disable-next-line */
export const sortByWeight = arr => {
  function sortWeight (a, b) {
    let aWeight = 0;
    let bWeight = 0;
    for (let i = 0; i < a.length; i++) {
      aWeight += +a[i];
    }
    for (let j = 0; j < b.length; j++) {
      bWeight += +b[j];
    }
    if (aWeight > bWeight) {
      return 1;
    }
    if (aWeight < bWeight) {
      return -1;
    }
  }
  return arr.sort(sortWeight);
};


