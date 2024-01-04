// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->



const counter = (c)=>{
    let i=0;
    const count = ()=>{
        if(i<c){
            i=i+1;
            console.log(i)
            setTimeout(count,1000)
        }
    }
    count()
    
}
counter(10)







































































// (Hint: setTimeout)