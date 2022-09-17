import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export const getFileInfo = async (fileName: string) => {
  try {
    const dirRelativeToPublicFolder = "files";
    const dir = path.resolve("./public", dirRelativeToPublicFolder);

    const fileStats = fs.statSync(`${dir}/${fileName}.txt`);
    const fileBody = fs.readFileSync(`${dir}/${fileName}.txt`, "utf8");

    return {
      fileName,
      updatedAt: fileStats.mtime,
      createdAt: fileStats.birthtime,
      fileBody,
    };
  } catch (e: any) {
    throw e;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    default:

    case "PUT":
      {
        const { fileName } = req.query;
        const { fileBody } = req.body;

        const dirRelativeToPublicFolder = "files";
        const dir = path.resolve("./public", dirRelativeToPublicFolder);

        try {
          fs.writeFile(`${dir}/${fileName}.txt`, fileBody, () =>
            res.status(200).json({ msg: "File saved successfully!" })
          );
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
    case "DELETE":
      {
        const { fileName } = req.query;

        const dirRelativeToPublicFolder = "files";
        const dir = path.resolve("./public", dirRelativeToPublicFolder);
        try {
          fs.rm(`${dir}/${fileName}.txt`, () =>
            res.status(200).json({ msg: "File deleted successfully!" })
          );
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
  }
}
