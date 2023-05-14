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
  }
  if (req.query?.id) {
    const updateProduct = await Product.updateOne();
    res.json(await Product.findById(req.query?.id));
  }
}
