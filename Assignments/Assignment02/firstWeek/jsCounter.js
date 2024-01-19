let maxTime = 30;

function startCount(){
    setInterval(()=>{
        if(maxTime >=0){
            console.log(maxTime);
            maxTime--;
        }else{
            clearInterval(this);
        }
    }, 1000);
}
startCount();