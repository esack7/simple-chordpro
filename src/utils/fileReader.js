const fileReader = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', () => reject(reader.error));
    return file
      ? reader.readAsBinaryString(file)
      : reject(new Error('USAGE ERROR; requires file'));
  });

export default fileReader;
