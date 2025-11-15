export const getEnv = (key: string, defaultValue = "") => {
  const val = process.env[key] ?? defaultValue;
  if (!val) throw new Error(` Missing required environment variable: ${key}`);
  return val;
};
