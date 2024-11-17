
// This is the file for defining a stream function for partial reading processes  :     
 
// 1- Define a importerd 'fs' from the [node core module]       :
const fs = require('fs') ; 
 
// 2- Define an extracted [file read stream] from 'fs'   :
const rs = fs.createReadStream('./files/newText.txt' ,  {encoding:'utf8'}) ; 
 
// 3- Define an extracted [file write stream] from 'fs'   :
const ws = fs.createWriteStream('./files/newStream.txt') ; 
  
// 4- Define a function of reading data comming from created read stream [rs] +   then using the  [write stream] to write its content in a new file :
rs.on( 'data', (dataChunk) => {
  ws.write(dataChunk) ;
})   

// 5-  Shortcut method to add the content of the stream read file inside a nother new file  of write stream , using {pipe()} method   :
rs.pipe(ws);




