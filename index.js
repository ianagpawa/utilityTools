
// fs.open('./resources/references/parentCsv.csv', 'r', (err, fd) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         console.error('myfile does not exist');
//         return;
//       }
  
//       throw err;
//     }  
//     var dataArray = fd.split(/\r?\n/);
//     console.log(dataArray);
  // });

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