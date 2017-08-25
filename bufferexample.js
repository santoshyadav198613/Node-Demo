// const buf1= Buffer.alloc(10);

const buf1= Buffer.alloc(10,1);

const buf2= Buffer.from('test','utf8');

console.log(buf1);
console.log(buf2.toString());


var arraydata = new Uint8Array(20);

console.log(arraydata);

const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));
