// <!-- ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 
//  -->

const fs = require('fs')

const filepath = './test.txt'

const fsi =()=>{
    fs.readFile(filepath,'utf8', (err,data)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log(data)
        }
    
    })
    console.log('hello there')
    
    for(let i=0;i<10000000000;i++){
        i++;
        
    }
    console.log('hi there')
    

}
fsi()
