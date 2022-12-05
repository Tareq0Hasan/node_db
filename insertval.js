const {client}= require("./DBconfig");

const insertvalue = async ()=>{
    console.log('ovi');

try{
const database = client.db('ovidemo');

const user = database.collection('list');
const docs =[
    {
    name: "Tareq Ovi",
    city:"khulna"
},
{
    name:"zami",
    city:"chapai"
},
]
// result = await user.insertOne(docs); //for single data isert
const result = await user.insertMany(docs); // for multiple data insert
console.log(result);
console.log(`a document was inserted by the id : ${ result.insertedCount}`)

}catch(error){
console.log(error)
}finally{
await client.close();
}




}

 insertvalue();
