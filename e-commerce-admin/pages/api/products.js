import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "POST") {
    const { name, description, price } = req.body;
    // const newProduct = new Product({ ...req.body });
    const newProduct = await Product.create({ name, description, price });

    res.status(200).json(newProduct);
  }
}
// export default function handler(req, res) {
//     res.status(200).json(req.method)
//   }
