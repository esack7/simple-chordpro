const pako = require('pako');

const unzip = flateDecode => pako.inflate(flateDecode, { to: 'string' });

export default unzip;
