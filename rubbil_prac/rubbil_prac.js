const { MongoClient } = require("mongodb");

const url = "mongodb+srv://ovidemo:DTtSDghw189HD170@cluster0.azxbwo0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient (url);
//console.log(client);

MongoClient.connect(url,function(error){
    if(error){
        console.log('error');
    }else{
        console.log('success');
       // isert();
       //delete_data();
       //serch_val();
       find_data_projection();
    }
});

// ---------------------insert function------------------------------
function isert (){

    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');
   
    const docs =[
        {
        name: "rahib hasan",
        city:"khulna"
    },
    {
        name:"moni",
        city:"faridpur"
    },
    ]
    const result = coll.insertMany(docs,function(error){
        if(error){
            console.log('data insert fail');
        }else{
            console.log('data insert successfully')
        }
    });


}
// ---------------------delete function-----------------------------------
function delete_data(){
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    const filter ={name:'zami'};

    //---coll.deleteMany() " for multiple data delete"--
    coll.deleteOne(filter ,function(error){
        if(error){
            console.log('delete data fail');
        }else{
            console.log('data delete successfully');
        }
    });
}
// -------------find/search function-----------------------------
function serch_val(){
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    const wh_out_cluse={} //with out condition , first row ta show kore
    const with_con={name:'rahib hasan'}

            //------single data search----
            
    // coll.findOne(with_con, function(error,result){ 
    //     if(error){
    //         console.log('error');
    //         }else{
    //             console.log(result);
    //         }
    // })


//----- for multiple data search-----

coll.find().toArray(function(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
    }
    
})

}

// -------------find/search specific column function-------------------------
function find_data_projection(){
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    const item_obj = {};
    const item_projec={_id:0, name:1};

    const cursor= coll.find().project(item_projec);
    
     cursor.forEach(console.dir); 
     




}

