import { NextApiResponse } from "next";
import getConfig from "next/config";

const handler = ({} = {}, res: NextApiResponse) => {
  res.status(200).json({ ...getConfig().serverRuntimeConfig });
};

export default handler;
