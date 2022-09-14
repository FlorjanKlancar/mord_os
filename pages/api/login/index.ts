import { NextApiRequest, NextApiResponse } from "next";

const DEFAULT_USERNAME = process.env.DEFAULT_USERNAME; //This is demo project so I hardcoded username and password
const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    default:
    case "POST":
      {
        const { username, password } = req.body;

        if (!username.length || !password.length)
          return res
            .status(500)
            .json({ msg: "You have to provide username and password!" });

        if (username !== DEFAULT_USERNAME || password !== DEFAULT_PASSWORD)
          return res.status(500).json({ msg: "Wrong username and password!" });

        res.status(200).json({ msg: "Login successful!" });
      }
      break;
  }
}
