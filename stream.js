const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt',{encoding:'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog2.txt')

// //read strem
// readStream.on('data',(buffer)=>{
//     console.log('new buffer');
//     console.log(buffer);

//     //writestream
//     writeStream.write('\n New Buffer \n')
//     writeStream.write(buffer);
// })


readStream.pipe(writeStream)