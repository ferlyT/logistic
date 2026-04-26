import { Elysia, t } from "elysia";
import { UserService } from "../services/users-servis";

/**
 * Definisi rute API untuk entitas User.
 * Prefix URL: /api
 */
export const userRoutes = new Elysia({ prefix: "/api" })
  /**
   * Endpoint Registrasi: POST /api/users
   */
  .post(
    "/users",
    async ({ body, set }) => {
      try {
        return await UserService.register(body);
      } catch (error: any) {
        set.status = 400;
        if (error.message === "Email sudah terdaftar") {
           return { error: error.message };
        }
        return { error: "Terjadi kesalahan internal" };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
      }),
    }
  )
  /**
   * Endpoint Login: POST /api/login
   */
  .post(
    "/login",
    async ({ body }) => {
      return await UserService.login(body);
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  );
