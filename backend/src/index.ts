import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Logistic Backend API is running",
  }))
  .get("/test-db", async () => {
    try {
      // Just a simple query to test connection
      const allUsers = await db.select().from(users).limit(1);
      return {
        status: "success",
        message: "Database connection successful",
        data: allUsers,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Database connection failed",
        error: error.message,
      };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
