"use server";

import { prisma } from "@/db/prisma";
import { convertToPlanObject } from "../utils";
import { Env } from "@/config/env";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: Number(Env.LATEST_PRODUCTS_LIMIT) as number,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlanObject(data);
}

export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: { slug: slug },
  });
  return data;
}
