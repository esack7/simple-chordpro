import TextObj from './textObj';

const handleText = textArr => {
  textArr.pop();
  let songText = '';
  let prevY = 0;
  textArr.map(idx => {
    const [first] = idx.split('\n\n');
    const textObj = new TextObj(first);
    if (textObj.text === '.') {
      textObj.text = ' ';
    }
    if (prevY !== parseInt(textObj.positionY, 10)) {
      textObj.text = `\n${textObj.text}`;
    }
    prevY = parseInt(textObj.positionY, 10);
    songText += textObj.text;
    return songText;
  });
  return songText;
};

export default handleText;
