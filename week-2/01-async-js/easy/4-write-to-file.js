// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs').promises

const data = "this is some sample text data"
const filepath = "./output.txt"

async function fsi(){
    try{
       await fs.writeFile(filepath, data, 'utf8')
        console.log('file written successfully')
    }
    catch(err){
        console.error(err)
    }
   
    console.log('expensive operation started')
    let sum=0;
    for(let i=0;i<100000000;i++){
        sum+=i;
    }
    console.log('expensive opertiaon halted')
}
fsi()