const express = require('express');
const { ppid } = require('process');

const app = express();

const users=[{
    name: 'John',
    kidneys: [{
        healthy:true,
    }, {healthy:false}
        ],
}]

app.use(express.json())

//querry parameters
app.get('/', (req, res) => {
    const john = users.filter((user)=>{
        if(user["name"]=="John"){
            return user;
        }
    })
    const johnKidneys = john[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys=0;
    const healthyKidneys = johnKidneys.filter((kidney)=>{
        if(kidney.healthy){
            return kidney;
        }
    })
    numberOfHealthyKidneys=healthyKidneys.length;
    let numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        healthyKidneys,
        numberOfHealthyKidneys
    })
    //for post we send data in the body instead

    
})

app.post('/',(req,res)=>{
    const kidney = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:kidney
    })
    res.json({
        msg:"done",
    })
})

//replacing all unhelathy kidneys to healthy

app.put('/',(req,res)=>{
    
    for(let i=0;i<users[0].kidneys.length;i++){
        
        users[0].kidneys[i].healthy=true;
        
    }
    res.json({
        msg:'done'
    })
})

//removing unhealthy kidenys

function oneUnhealthyKidney(){
    let atlestOneunhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atlestOneunhealthyKidney=true;
        }
    }
    return atlestOneunhealthyKidney;

}

app.delete('/',(req,res)=>{
    //only if atlest one unhealthy kidney only then delete other wise send 411
    if(oneUnhealthyKidney()){
        const newKidneys = users[0].kidneys.filter((kidney)=>{
            if(kidney.healthy){
                return kidney;
            }
        })
        users[0].kidneys = newKidneys;
        res.json({
            msg:"done"
        })
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidney"
        })
    }


    
})


app.listen(3001,()=>{
    console.log('listening on port 3000');
})