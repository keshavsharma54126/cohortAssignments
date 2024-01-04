// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs').promises
const filePath = "./test2.txt"
let textdata=""

async function fsi(filepath){
  try{
    let content = await fs.readFile(filePath,'utf8')
    content = content.replace(/\s+/g,' ').trim()
    await fs.writeFile(filePath,content,'utf8',(err)=>{
         if(err){
             console.error(err)
         }
         else{
             console.log("file written successfully"+textdata)
         }
     })
  }catch(err){
    console.error(err)
  }
}
fsi(filePath)
