import multiparty from "multiparty";
import { S3Client } from "@aws-sdk/client-s3";
export default async function handle(req, res) {
  const form = new multiparty.Form();
  form.parse(req, async (err, fields, files) => {
    console.log(files.file.length);
    res.json("ok");
  });
}

export const config = {
  api: { bodyParser: false },
};
