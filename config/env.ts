import { getEnv } from "@/utils/getEnv";

export const Env = {
  APP_NAME: getEnv("NEXT_PUBLIC_APP_NAME", "Janstore"),
  APP_DESCRIPTION: getEnv(
    "NEXT_PUBLIC_APP_DESCRIPTION",
    "Best modern E-commerce clothes and shoes store"
  ),
  SERVER_URL: getEnv("NEXT_PUBLIC_SERVER_URL", "http://localhost:3000"),
  LATEST_PRODUCTS_LIMIT: getEnv("LATEST_PRODUCTS_LIMIT", "4"),
};
