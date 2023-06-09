import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findById(req.query?.id));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { name, description, price } = req.body;
    // const newProduct = new Product({ ...req.body });
    const newProduct = await Product.create({ name, description, price });

    res.status(200).json(newProduct);
  }

  if (method === "PUT") {
    const { _id } = req.body;

    const updateProduct = await Product.updateOne({ _id }, req.body);
    res.json(updateProduct);
  }
  if (method === "DELETE") {
    const { _id } = req.body;
    await Product.deleteOne(_id);
    res.json("Deleted");
  }
}
