import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import getConfig from "next/config";

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    default:
    case "GET":
      {
        let response: any = [];

        const test = await newFunc();
        res.status(200).json(test);
        console.log({ test });
      }
      break;
  }
}

const newFunc = async () => {
  let response: any = [];
  fs.readdir("files", function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    for (const file of files) {
      fs.stat(`files/${file}`, (err, stats) => {
        if (err) {
          throw err;
        }

        // print file last modified date
        console.log(`File Data Last Modified: ${stats.mtime}`);
        console.log(`File Status Last Modified: ${stats.ctime}`);
        console.log(`File Status Last Modified: ${stats.size}`);
        console.log({ file });
        response.push({
          fileName: file,
          updatedAt: stats.mtime,
          createdAt: stats.ctime,
          size: stats.size,
        });
      });
    }
  });
  console.log({ response });

  return response;
};
