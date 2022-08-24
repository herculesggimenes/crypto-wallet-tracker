// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const currencies = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.currency.findMany();
  res.status(200).json(examples);
};


export default currencies;
