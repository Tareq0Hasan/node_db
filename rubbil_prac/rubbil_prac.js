const { MongoClient } = require("mongodb");

//const url = "mongodb+srv://ovidemo:DTtSDghw189HD170@cluster0.azxbwo0.mongodb.net/?retryWrites=true&w=majority";
const url ="mongodb://127.0.0.1:27017/";
const client = new MongoClient (url);
//console.log(client);

MongoClient.connect(url,function(error){
    if(error){
        console.log('error');
    }else{
        console.log('success');
        isert();
       //delete_data();
       //serch_val();
       //find_data_projection();
       //find_with_query();
       //find_data_by_limit();
       //find_data_with_sort();
// update_data();
    }
});

// ---------------------insert function------------------------------
function isert (){

    const mydb = client.db('school');
    const coll= mydb.collection ('student');
   
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

// -------------find/search all data with query -------------------------


function find_with_query(){

    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    const item_obj = {name:"rahib hasan"};//hare adding condition, 
    //we can use multiple condition like " const item_obj = {name:"rahib hasan,city:khulna"}"

    
    const cursor= coll.find(item_obj);
    
     cursor.forEach(console.dir); 

}

//----------------------find data by using limit ------------------------
function find_data_by_limit(){
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    
//const item_obj = {city:"khulna"};

    const cursor= coll.find().limit(3);
    
     cursor.forEach(console.dir); 
     
}
//------------------------find data with sorting--------------------------------
function find_data_with_sort(){
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');

    
const sort_field = {city:1};

    const cursor= coll.find().sort(sort_field);
    
     cursor.forEach(console.dir); 
     
}

//------------------------update collection data with sorting--------------------------------
function update_data(){
    try{

    
    const mydb = client.db('ovidemo');
    const coll= mydb.collection ('list');
    
    const filt= {city:'khulna'};
    const option= {upsert: true};
    
    const update_doc= {
           $set:{
                name:'rahib Hasan'
           }
    };
    console.log('hi');
    //const res= await coll.updateOne(filt,update_doc,option); //for single data update
    const res=  coll.updateMany(filt,update_doc,option); // for multiple data update
   
   //console.log(`${res.matchedCount} document match the filter, updated ${res.modifiedCount}`);
    
    }catch(error){
        console.log(error);
    }finally{
        
        client.close();
    }
}

//--------------create new collection----------------


