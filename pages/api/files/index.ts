import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { fileModel } from "../../../model/fileModel";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    default:
    case "GET":
      {
        try {
          const getFileData = await getAllFilesInDir();
          res.status(200).json(getFileData);
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
    case "POST":
      {
        const { fileName, fileBody } = req.body;

        const dirRelativeToPublicFolder = "files";
        const dir = path.resolve("./public", dirRelativeToPublicFolder);

        try {
          fs.writeFileSync(`${dir}/${fileName}.txt`, fileBody);
          res.status(200).json({ msg: "File saved successfully!" });
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
  }
}

const getAllFilesInDir = async () => {
  let response: fileModel[] = [];
  try {
    const dirRelativeToPublicFolder = "files";
    const dir = path.resolve("./public", dirRelativeToPublicFolder);

    const files = fs.readdirSync(dir);

    for (const file of files) {
      const stats = fs.statSync(`public/files/${file}`);

      response.push({
        fileName: file,
        updatedAt: stats.mtime,
        createdAt: stats.birthtime,
        size: stats.size,
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
  return response;
};
