import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    default:
    case "GET":
      {
        try {
          res.status(200).json("");
        } catch (e: any) {
          res.status(500).json({ msg: e });
        }
      }
      break;
  }
}
