// prisma.config.js
import "dotenv/config"; // Make sure you installed dotenv: npm install dotenv
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // We use process.env directly here to ensure it's captured
    url: process.env.DATABASE_URL,
  },
});
