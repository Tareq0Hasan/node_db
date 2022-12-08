

let count =0;

function tim_ap(){
count++;

if(count==5){
    clearInterval(aet_id);
}else{
    console.log(count);
}
}

const aet_id= setInterval(tim_ap,1000);


