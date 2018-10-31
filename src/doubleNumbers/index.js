/* eslint-disable-next-line */
export const doubleNum = num => {
  const str  = `${num}`;
  const leftSubStr = str.slice(0, str.length / 2);
  const rightSubStr = str.slice(str.length / 2, str.length);
  if (str.length > 1 && str.length % 2 === 0 && leftSubStr === rightSubStr ) {
    return num;
  } else {
    return num * 2;
  }
};

