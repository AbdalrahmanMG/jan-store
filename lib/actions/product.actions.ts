"use server"

import { PrismaClient } from "@prisma/client";
import { convertToPlanObject } from "../utils";
import { Env } from "@/config/env";

export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: Number(Env.LATEST_PRODUCTS_LIMIT) as number,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlanObject(data);
}
