import { ObjectId } from "mongodb";
import { client } from ".";


export default async function mongodbConnection(req, res) {
    try {

        const id = req?.query?.id
  
 
 
      await client.connect();
      const productsCollection = await client
        .db("PcWizardry")
        .collection("products");
      if (req?.method === "GET") {
        const products = await productsCollection.findOne({_id:new ObjectId(id)})
        res.send({ message: "success", status: 200,  data: products });
      }
    } finally {
    
    }
  } 
  mongodbConnection()