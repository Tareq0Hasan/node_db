const {client}= require ('./DBconfig');
const update_q = async ()=>{
try{

    console.log('hi');
const dbs = client.db('ovidemo');
const coll= dbs.collection ('list');

const filt= {city:'khulna'};
const option= {upsert: true};

const update_doc= {
       $set:{
            name:'Tareq Hasan'
       },
};

const res= await coll.updateMany(filt,update_doc,option);
console.log(`${res.matchedCount} document match the filter, updated ${res.modifiedCount}`);

}catch(error){
    console.log(error);
}finally{
    
  await  client.close();
}

}

update_q ();
