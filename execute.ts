const fs = require('fs');

// // reading
// fs.open('myfile', 'r', (err, fd) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         console.error('myfile does not exist');
//         return;
//       }
  
//       throw err;
//     }
  
//     readMyData(fd);
//   });

// // Writing
// fs.open('message.txt', 'a', (err, fd) => {
//     if (err) throw err;
//     fs.appendFile(fd, 'data to append', 'utf8', (err) => {
//       fs.close(fd, (err) => {
//         if (err) throw err;
//       });
//       if (err) throw err;
//     });
//   });