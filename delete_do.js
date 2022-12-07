const {client}= require ('./DBconfig');


const run=async ()=> {
    try {
      const database = client.db("ovidemo");
      const list = database.collection("list");
      
      const query = { city: "khulna" };
      const result = await list.deleteMany(query);
    //   if (result.deletedCount === 1) {
    //     console.log("Successfully deleted one document.");
    //   } else {
    //     console.log("No documents matched the query. Deleted 0 documents.");
    //   }
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);