export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  // BUILT_IN_FORGE_API_KEY is the Manus-hosted key ONLY — do NOT fall back to OPENAI_API_KEY here
  // The llm.ts routing logic uses the presence/absence of forgeApiKey to decide which API to call
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  openAiApiKey: process.env.OPENAI_API_KEY ?? "",
};
