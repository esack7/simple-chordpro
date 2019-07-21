const StreamObj = buffer => {
  this.allBuffer = buffer;
  this.header = buffer.slice(0, 8);
  // this.primero = buffer.slice(175, 3648);
  this.primero = buffer.slice(174, 5102);
  this.segundo = buffer.slice(6165, 21070);
  this.tercero = buffer.slice(21970, 39560);
  this.cuarto = buffer.slice(40396, 49105);
  return this;
};

export default StreamObj;
