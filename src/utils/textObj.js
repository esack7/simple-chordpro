const TextObj = stringIdx => {
  const positionArr = stringIdx.split(' Td')[0].split('\n');
  [this.text] = stringIdx.split('(')[1].split(')');
  [this.positionX, this.positionY] = positionArr[positionArr.length - 1].split(
    ' '
  );
  return this;
};

export default TextObj;
