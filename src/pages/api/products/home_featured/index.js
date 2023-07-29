import { client } from "..";

export default async function mongodbConnection(req, res) {
  try {
    await client.connect();


    const productsCollection = await client
      .db("PcWizardry")
      .collection("products");
    if (req.method === "GET") {
      const products = await productsCollection.find({is_home_featured:true}).toArray()
      res.send({ message: "success", status: 200,  data: products });
    }
  } finally {
   
  }
}
mongodbConnection() 
