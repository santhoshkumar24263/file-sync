const {readFileSync ,writeFileSync } = require('fs')
 exports.FSsync=()=>  {
     
    console.log('Start')

    const firstFile = readFileSync('./Files/first.txt','utf-8')
    console.log(firstFile);

    writeFileSync('./Files/first.txt','This is the first written file !')

    writeFileSync('./Files/second.txt',`Data from firstFile.txt : ${firstFile}`)

    console.log('End');
  }