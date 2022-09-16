import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export const getFileInfo = async (fileName: string) => {
  try {
    const fileStats = fs.statSync(`public/files/${fileName}.txt`);
    const fileBody = fs.readFileSync(`public/files/${fileName}.txt`, "utf8");

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
    case "GET":
      {
      }
      break;
    case "PUT":
      {
        const { fileName, fileBody } = req.body;

        try {
          fs.writeFileSync(`public/files/${fileName}.txt`, fileBody);
          res.status(200).json({ msg: "File saved successfully!" });
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
    case "DELETE":
      {
        const { fileName } = req.query;

        try {
          fs.unlinkSync(`public/files/${fileName}.txt`);

          res.status(200).json({ msg: "File deleted successfully!" });
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
  }
}
